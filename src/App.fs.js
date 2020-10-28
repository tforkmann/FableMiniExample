import { Union, Record } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Types.js";
import { union_type, option_type, list_type, record_type, bool_type, string_type, int32_type } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Reflection.js";
import { ofSeq, tryFind, map, filter, singleton, append, maxBy, ofArray } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/List.js";
import { equals, createObjDebug, comparePrimitives } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Util.js";
import { map as map_1 } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Option.js";
import { join, isNullOrWhiteSpace } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/String.js";
import { mkStyle, reactElement, reactApi, mkAttr } from "./.fable/Feliz.1.14.1/Interop.fs.js";
import { map as map_2, empty, singleton as singleton_1, append as append_1, delay } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Seq.js";
import { ProgramModule_run, ProgramModule_mkSimple } from "./.fable/Fable.Elmish.3.1.0/program.fs.js";
import { Program_withReactSynchronous } from "./.fable/Fable.Elmish.React.3.0.1/react.fs.js";

export class Todo extends Record {
    constructor(Id, Description, Completed) {
        super();
        this.Id = (Id | 0);
        this.Description = Description;
        this.Completed = Completed;
    }
}

export function Todo$reflection() {
    return record_type("App.Todo", [], Todo, () => [["Id", int32_type], ["Description", string_type], ["Completed", bool_type]]);
}

export class TodoBeingEdited extends Record {
    constructor(Id, Description) {
        super();
        this.Id = (Id | 0);
        this.Description = Description;
    }
}

export function TodoBeingEdited$reflection() {
    return record_type("App.TodoBeingEdited", [], TodoBeingEdited, () => [["Id", int32_type], ["Description", string_type]]);
}

export class State extends Record {
    constructor(TodoList, NewTodo, TodoBeingEdited) {
        super();
        this.TodoList = TodoList;
        this.NewTodo = NewTodo;
        this.TodoBeingEdited = TodoBeingEdited;
    }
}

export function State$reflection() {
    return record_type("App.State", [], State, () => [["TodoList", list_type(Todo$reflection())], ["NewTodo", string_type], ["TodoBeingEdited", option_type(TodoBeingEdited$reflection())]]);
}

export class Msg extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["SetNewTodo", "AddNewTodo", "DeleteTodo", "ToggleCompleted", "CancelEdit", "ApplyEdit", "StartEditingTodo", "SetEditedDescription"];
    }
}

export function Msg$reflection() {
    return union_type("App.Msg", [], Msg, () => [[["Item", string_type]], [], [["Item", int32_type]], [["Item", int32_type]], [], [], [["Item", int32_type]], [["Item", string_type]]]);
}

export function init() {
    return new State(ofArray([new Todo(1, "Learn F#", false), new Todo(2, "Learn Elmish", true)]), "", void 0);
}

export function update(msg, state) {
    let todoBeingEdited;
    let pattern_matching_result;
    if (msg.tag === 0) {
        pattern_matching_result = 0;
    }
    else if (msg.tag === 1) {
        if (isNullOrWhiteSpace(state.NewTodo)) {
            pattern_matching_result = 1;
        }
        else {
            pattern_matching_result = 2;
        }
    }
    else {
        pattern_matching_result = 2;
    }
    switch (pattern_matching_result) {
        case 0: {
            const desc = msg.fields[0];
            return new State(state.TodoList, desc, state.TodoBeingEdited);
        }
        case 1: {
            return state;
        }
        case 2: {
            switch (msg.tag) {
                case 1: {
                    let nextTodoId;
                    const matchValue = state.TodoList;
                    if (matchValue.tail == null) {
                        nextTodoId = 1;
                    }
                    else {
                        const elems = matchValue;
                        let todo_1;
                        const list = elems;
                        todo_1 = maxBy((todo) => todo.Id, list, {
                            Compare: comparePrimitives,
                        });
                        nextTodoId = (todo_1.Id + 1);
                    }
                    const nextTodo = new Todo(nextTodoId, state.NewTodo, false);
                    return new State(append(state.TodoList, singleton(nextTodo)), "", state.TodoBeingEdited);
                }
                case 2: {
                    const todoId = msg.fields[0] | 0;
                    let nextTodoList;
                    const list_1 = state.TodoList;
                    nextTodoList = filter((todo_2) => (todo_2.Id !== todoId), list_1);
                    return new State(nextTodoList, state.NewTodo, state.TodoBeingEdited);
                }
                case 3: {
                    const todoId_1 = msg.fields[0] | 0;
                    let nextTodoList_1;
                    const list_2 = state.TodoList;
                    nextTodoList_1 = map((todo_3) => {
                        if (todo_3.Id === todoId_1) {
                            const Completed = !todo_3.Completed;
                            return new Todo(todo_3.Id, todo_3.Description, Completed);
                        }
                        else {
                            return todo_3;
                        }
                    }, list_2);
                    return new State(nextTodoList_1, state.NewTodo, state.TodoBeingEdited);
                }
                case 6: {
                    const todoId_2 = msg.fields[0] | 0;
                    let nextEditModel;
                    let option;
                    const list_3 = state.TodoList;
                    option = tryFind((todo_4) => (todo_4.Id === todoId_2), list_3);
                    nextEditModel = map_1((todo_5) => (new TodoBeingEdited(todoId_2, todo_5.Description)), option);
                    return new State(state.TodoList, state.NewTodo, nextEditModel);
                }
                case 4: {
                    return new State(state.TodoList, state.NewTodo, void 0);
                }
                case 5: {
                    const matchValue_1 = state.TodoBeingEdited;
                    if (matchValue_1 != null) {
                        if (todoBeingEdited = matchValue_1, todoBeingEdited.Description === "") {
                            const todoBeingEdited_1 = matchValue_1;
                            return state;
                        }
                        else if (matchValue_1 != null) {
                            const todoBeingEdited_2 = matchValue_1;
                            let nextTodoList_2;
                            const list_4 = state.TodoList;
                            nextTodoList_2 = map((todo_6) => {
                                if (todo_6.Id === todoBeingEdited_2.Id) {
                                    return new Todo(todo_6.Id, todoBeingEdited_2.Description, todo_6.Completed);
                                }
                                else {
                                    return todo_6;
                                }
                            }, list_4);
                            return new State(nextTodoList_2, state.NewTodo, void 0);
                        }
                        else {
                            throw (new Error("The match cases were incomplete"));
                        }
                    }
                    else {
                        return state;
                    }
                }
                case 7: {
                    const newText = msg.fields[0];
                    let nextEditModel_1;
                    const option_1 = state.TodoBeingEdited;
                    nextEditModel_1 = map_1((todoBeingEdited_3) => (new TodoBeingEdited(todoBeingEdited_3.Id, newText)), option_1);
                    return new State(state.TodoList, state.NewTodo, nextEditModel_1);
                }
                default: {
                    throw (new Error("The match cases were incomplete against type of \u0027Msg\u0027 at C:/Users/tforkmann/Documents/1_Tests/FableMiniExample/src/App.fs"));
                }
            }
        }
    }
}

export function div(classes, children) {
    const xs = ofArray([mkAttr("className", join(" ", classes)), mkAttr("children", reactApi.Children.toArray(Array.from(children)))]);
    return reactElement("div", createObjDebug(xs));
}

export const appTitle = (() => {
    const xs = ofArray([mkAttr("className", "title"), mkAttr("children", "Elmish To-Do List")]);
    return reactElement("p", createObjDebug(xs));
})();

export function inputField(state, dispatch) {
    let xs, value, xs_2, elems, xs_1;
    return div(ofArray(["field", "has-addons"]), ofArray([div(ofArray(["control", "is-expanded"]), singleton((xs = ofArray([mkAttr("className", join(" ", ["input", "is-medium"])), (value = state.NewTodo, mkAttr("ref", (e) => {
        let value_2, value_1;
        if ((value_2 = (value_1 = e, (value_1 == null)), (!value_2)) ? (!equals(e.value, value)) : false) {
            e.value = value;
        }
    })), mkAttr("onChange", (ev) => {
        let arg0;
        const arg = ev.target.value;
        dispatch((arg0 = arg, (new Msg(0, arg0))));
    })]), reactElement("input", createObjDebug(xs))))), div(singleton("control"), singleton((xs_2 = ofArray([mkAttr("className", join(" ", ["button", "is-primary", "is-medium"])), mkAttr("onClick", (_arg1) => {
        dispatch(new Msg(1));
    }), (elems = [(xs_1 = singleton(mkAttr("className", join(" ", ["fa", "fa-plus"]))), reactElement("i", createObjDebug(xs_1)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]), reactElement("button", createObjDebug(xs_2)))))]));
}

export function renderTodo(todo, dispatch) {
    let xs, xs_2, names, elems, xs_1, xs_4, elems_1, xs_3, xs_6, elems_2, xs_5;
    return div(singleton("box"), singleton(div(ofArray(["columns", "is-mobile", "is-vcentered"]), ofArray([div(ofArray(["column", "subtitle"]), singleton((xs = ofArray([mkAttr("className", "subtitle"), mkAttr("children", todo.Description)]), reactElement("p", createObjDebug(xs))))), div(ofArray(["column", "is-narrow"]), singleton(div(singleton("buttons"), ofArray([(xs_2 = ofArray([(names = ofSeq(delay(() => append_1(singleton_1("button"), delay(() => (todo.Completed ? singleton_1("is-success") : empty()))))), mkAttr("className", join(" ", names))), mkAttr("onClick", (_arg1) => {
        dispatch(new Msg(3, todo.Id));
    }), (elems = [(xs_1 = singleton(mkAttr("className", join(" ", ["fa", "fa-check"]))), reactElement("i", createObjDebug(xs_1)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]), reactElement("button", createObjDebug(xs_2))), (xs_4 = ofArray([mkAttr("className", join(" ", ["button", "is-primary"])), mkAttr("onClick", (_arg2) => {
        dispatch(new Msg(6, todo.Id));
    }), (elems_1 = [(xs_3 = singleton(mkAttr("className", join(" ", ["fa", "fa-edit"]))), reactElement("i", createObjDebug(xs_3)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_1))))]), reactElement("button", createObjDebug(xs_4))), (xs_6 = ofArray([mkAttr("className", join(" ", ["button", "is-danger"])), mkAttr("onClick", (_arg3) => {
        dispatch(new Msg(2, todo.Id));
    }), (elems_2 = [(xs_5 = singleton(mkAttr("className", join(" ", ["fa", "fa-times"]))), reactElement("i", createObjDebug(xs_5)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_2))))]), reactElement("button", createObjDebug(xs_6)))]))))]))));
}

export function renderEditForm(todoBeingEdited, dispatch) {
    let xs, value, xs_2, elems, xs_1, xs_4, elems_1, xs_3;
    return div(singleton("box"), singleton(div(singleton("field is-grouped"), ofArray([div(singleton("control is-expanded"), singleton((xs = ofArray([mkAttr("className", join(" ", ["input", "is-medium"])), (value = todoBeingEdited.Description, mkAttr("ref", (e) => {
        let value_2, value_1;
        if ((value_2 = (value_1 = e, (value_1 == null)), (!value_2)) ? (!equals(e.value, value)) : false) {
            e.value = value;
        }
    })), mkAttr("onChange", (ev) => {
        let arg0;
        const arg = ev.target.value;
        dispatch((arg0 = arg, (new Msg(7, arg0))));
    })]), reactElement("input", createObjDebug(xs))))), div(ofArray(["control", "buttons"]), ofArray([(xs_2 = ofArray([mkAttr("className", join(" ", ["button", "is-primary"])), mkAttr("onClick", (_arg1) => {
        dispatch(new Msg(5));
    }), (elems = [(xs_1 = singleton(mkAttr("className", join(" ", ["fa", "fa-save"]))), reactElement("i", createObjDebug(xs_1)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]), reactElement("button", createObjDebug(xs_2))), (xs_4 = ofArray([mkAttr("className", join(" ", ["button", "is-warning"])), mkAttr("onClick", (_arg2) => {
        dispatch(new Msg(4));
    }), (elems_1 = [(xs_3 = singleton(mkAttr("className", join(" ", ["fa", "fa-arrow-right"]))), reactElement("i", createObjDebug(xs_3)))], mkAttr("children", reactApi.Children.toArray(Array.from(elems_1))))]), reactElement("button", createObjDebug(xs_4)))]))]))));
}

export function todoList(state, dispatch) {
    let elems;
    const xs = singleton((elems = ofSeq(delay(() => map_2((todo) => {
        let todoBeingEdited;
        const matchValue = state.TodoBeingEdited;
        let pattern_matching_result, todoBeingEdited_1;
        if (matchValue != null) {
            if (todoBeingEdited = matchValue, todoBeingEdited.Id === todo.Id) {
                pattern_matching_result = 0;
                todoBeingEdited_1 = matchValue;
            }
            else {
                pattern_matching_result = 1;
            }
        }
        else {
            pattern_matching_result = 1;
        }
        switch (pattern_matching_result) {
            case 0: {
                return renderEditForm(todoBeingEdited_1, dispatch);
            }
            case 1: {
                const otherwise = matchValue;
                return renderTodo(todo, dispatch);
            }
        }
    }, state.TodoList))), mkAttr("children", reactApi.Children.toArray(Array.from(elems)))));
    return reactElement("ul", createObjDebug(xs));
}

export function render(state, dispatch) {
    let properties, elems;
    const xs = ofArray([(properties = singleton(mkStyle("padding", 20)), mkAttr("style", createObjDebug(properties))), (elems = [appTitle, inputField(state, dispatch), todoList(state, dispatch)], mkAttr("children", reactApi.Children.toArray(Array.from(elems))))]);
    return reactElement("div", createObjDebug(xs));
}

(function () {
    let program_1;
    const program = ProgramModule_mkSimple(init, update, render);
    program_1 = Program_withReactSynchronous("elmish-app", program);
    ProgramModule_run(program_1);
})();

