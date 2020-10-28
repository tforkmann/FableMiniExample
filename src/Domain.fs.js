import { Record, Union } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Types.js";
import { bool_type, class_type, string_type, int32_type, record_type, float64_type, union_type } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Reflection.js";
import { toFail, printf, toConsole } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/String.js";
import { int32ToString } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Util.js";

export class PlantType extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CCTechnicalReportPlants", "BmBhkwTechnicalReportPlants", "EGBhkwTechnicalReportPlants"];
    }
}

export function PlantType$reflection() {
    return union_type("Domain.PlantType", [], PlantType, () => [[], [], []]);
}

export function PlantType__get_GetValue(this$) {
    switch (this$.tag) {
        case 1: {
            return "BmBhkwTechnicalReportPlants";
        }
        case 2: {
            return "EGBhkwTechnicalReportPlants";
        }
        default: {
            return "CCTechnicalReportPlants";
        }
    }
}

export function PlantType__get_GetValueDE(this$) {
    switch (this$.tag) {
        case 1: {
            return "BM-BHKW und BMKW mit Fahrplan";
        }
        case 2: {
            return "restliche BHKW";
        }
        default: {
            return "CityCube";
        }
    }
}

export class Units extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["KW", "Keine", "Degree", "KWh", "MWh", "Percent", "Hours"];
    }
}

export function Units$reflection() {
    return union_type("Domain.Units", [], Units, () => [[], [], [], [], [], [], []]);
}

export function machedUnitIdToUnit(unitId) {
    switch (unitId) {
        case 1: {
            return new Units(1);
        }
        case 2: {
            return new Units(2);
        }
        case 3: {
            return new Units(0);
        }
        case 4: {
            return new Units(3);
        }
        case 11: {
            return new Units(4);
        }
        case 14: {
            return new Units(5);
        }
        case 20: {
            return new Units(6);
        }
        default: {
            const x = unitId;
            const arg10 = x;
            const clo1 = toConsole(printf("unmatched unitId %i"));
            clo1(arg10);
            const arg10_1 = x;
            const clo1_1 = toFail(printf("unmatched unitId %i"));
            return clo1_1(arg10_1);
        }
    }
}

export function matchParameterIdToParameter(parameterId) {
    switch (parameterId) {
        case 5: {
            return 5;
        }
        case 10: {
            return 10;
        }
        case 11: {
            return 11;
        }
        case 24: {
            return 24;
        }
        case 26: {
            return 26;
        }
        case 32: {
            return 32;
        }
        case 33: {
            return 33;
        }
        case 34: {
            return 34;
        }
        case 42: {
            return 42;
        }
        case 46: {
            return 46;
        }
        case 201: {
            return 201;
        }
        default: {
            const x = parameterId;
            const arg10 = x;
            const clo1 = toConsole(printf("unmatched parameterId %i"));
            clo1(arg10);
            const arg10_1 = x;
            const clo1_1 = toFail(printf("unmatched parameterId %i"));
            return clo1_1(arg10_1) | 0;
        }
    }
}

export function matchParameterIdToDesc(parameterId) {
    switch (parameterId) {
        case 5: {
            return "TemperaturRl";
        }
        case 10: {
            return "LeistungEl";
        }
        case 11: {
            return "LeistungTh";
        }
        case 24: {
            return "Anforderung";
        }
        case 26: {
            return "Temperatur";
        }
        case 32: {
            return "Fuellstand";
        }
        case 33: {
            return "Betrieb";
        }
        case 34: {
            return "Stoerung";
        }
        case 42: {
            return "Betriebsstunden";
        }
        case 46: {
            return "Starts";
        }
        case 201: {
            return "FahrplanPrognose";
        }
        default: {
            const x = parameterId;
            const arg10 = x;
            const clo1 = toConsole(printf("unmatched parameterId %i"));
            clo1(arg10);
            const arg10_1 = x;
            const clo1_1 = toFail(printf("unmatched parameterId %i"));
            return clo1_1(arg10_1);
        }
    }
}

export class PowerResults extends Record {
    constructor(Average, Min, Max) {
        super();
        this.Average = Average;
        this.Min = Min;
        this.Max = Max;
    }
}

export function PowerResults$reflection() {
    return record_type("Domain.PowerResults", [], PowerResults, () => [["Average", float64_type], ["Min", float64_type], ["Max", float64_type]]);
}

export class Ids_AggregatId extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["AggregatId"];
    }
}

export function Ids_AggregatId$reflection() {
    return union_type("Domain.Ids.AggregatId", [], Ids_AggregatId, () => [[["AggregatId", int32_type]]]);
}

export function Ids_AggregatId__get_GetValue(this$) {
    const _arg1 = this$;
    const id = _arg1.fields[0] | 0;
    return id | 0;
}

export function Ids_AggregatId__get_GetValueAsByte(this$) {
    const _arg2 = this$;
    const id = _arg2.fields[0] | 0;
    return id & 0xFF;
}

export class Ids_LocationId extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["LocationId"];
    }
}

export function Ids_LocationId$reflection() {
    return union_type("Domain.Ids.LocationId", [], Ids_LocationId, () => [[["locationId", int32_type]]]);
}

export function Ids_LocationId__get_GetValue(this$) {
    const _arg3 = this$;
    const id = _arg3.fields[0] | 0;
    return id | 0;
}

export function Ids_LocationId__get_GetValueAsString(this$) {
    const _arg4 = this$;
    const id = _arg4.fields[0] | 0;
    return int32ToString(id);
}

export class Location extends Record {
    constructor(BhkwProducer, AggregatId, InstalledPower, PlantName, LocationId) {
        super();
        this.BhkwProducer = BhkwProducer;
        this.AggregatId = AggregatId;
        this.InstalledPower = InstalledPower;
        this.PlantName = PlantName;
        this.LocationId = LocationId;
    }
}

export function Location$reflection() {
    return record_type("Domain.Location", [], Location, () => [["BhkwProducer", string_type], ["AggregatId", Ids_AggregatId$reflection()], ["InstalledPower", float64_type], ["PlantName", string_type], ["LocationId", Ids_LocationId$reflection()]]);
}

export class TimeTableFulfilment extends Record {
    constructor(AfterTime, AfterEnergy) {
        super();
        this.AfterTime = AfterTime;
        this.AfterEnergy = AfterEnergy;
    }
}

export function TimeTableFulfilment$reflection() {
    return record_type("Domain.TimeTableFulfilment", [], TimeTableFulfilment, () => [["AfterTime", float64_type], ["AfterEnergy", float64_type]]);
}

export class Status extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["IsRunningOk", "OperatingCounterBroken", "ShutDown", "MissingData", "StrangeError"];
    }
}

export function Status$reflection() {
    return union_type("Domain.Status", [], Status, () => [[], [], [["Item", Ids_LocationId$reflection()]], [["Item", Ids_LocationId$reflection()]], []]);
}

export class TechnicalReportDataCC extends Record {
    constructor(PlantName, ReducedPowerInPartialLoad, OperationHours, DownTime, PowerResults, PartialLoad, ReturnTemp, Starts, Status) {
        super();
        this.PlantName = PlantName;
        this.ReducedPowerInPartialLoad = (ReducedPowerInPartialLoad | 0);
        this.OperationHours = (OperationHours | 0);
        this.DownTime = DownTime;
        this.PowerResults = PowerResults;
        this.PartialLoad = PartialLoad;
        this.ReturnTemp = ReturnTemp;
        this.Starts = Starts;
        this.Status = Status;
    }
}

export function TechnicalReportDataCC$reflection() {
    return record_type("Domain.TechnicalReportDataCC", [], TechnicalReportDataCC, () => [["PlantName", string_type], ["ReducedPowerInPartialLoad", int32_type], ["OperationHours", int32_type], ["DownTime", class_type("System.TimeSpan")], ["PowerResults", PowerResults$reflection()], ["PartialLoad", class_type("System.TimeSpan")], ["ReturnTemp", class_type("System.TimeSpan")], ["Starts", float64_type], ["Status", Status$reflection()]]);
}

export class TechnicalReportDataBMBHKW extends Record {
    constructor(PlantName, TimeTable, OperatingTime, TimeTableFulfilment, PowerResults, DownTime, BufferFillingLevelAtSwitchOff, DisturbedTime, Blocks, Status) {
        super();
        this.PlantName = PlantName;
        this.TimeTable = TimeTable;
        this.OperatingTime = OperatingTime;
        this.TimeTableFulfilment = TimeTableFulfilment;
        this.PowerResults = PowerResults;
        this.DownTime = DownTime;
        this.BufferFillingLevelAtSwitchOff = BufferFillingLevelAtSwitchOff;
        this.DisturbedTime = DisturbedTime;
        this.Blocks = Blocks;
        this.Status = Status;
    }
}

export function TechnicalReportDataBMBHKW$reflection() {
    return record_type("Domain.TechnicalReportDataBMBHKW", [], TechnicalReportDataBMBHKW, () => [["PlantName", string_type], ["TimeTable", class_type("System.TimeSpan")], ["OperatingTime", class_type("System.TimeSpan")], ["TimeTableFulfilment", TimeTableFulfilment$reflection()], ["PowerResults", PowerResults$reflection()], ["DownTime", class_type("System.TimeSpan")], ["BufferFillingLevelAtSwitchOff", string_type], ["DisturbedTime", class_type("System.TimeSpan")], ["Blocks", string_type], ["Status", Status$reflection()]]);
}

export class ReportingArea extends Union {
    constructor(tag, ...fields) {
        super();
        this.tag = (tag | 0);
        this.fields = fields;
    }
    cases() {
        return ["CC", "BM"];
    }
}

export function ReportingArea$reflection() {
    return union_type("Domain.ReportingArea", [], ReportingArea, () => [[["Item", TechnicalReportDataCC$reflection()]], [["Item", TechnicalReportDataBMBHKW$reflection()]]]);
}

export class TechnicalReportingData extends Record {
    constructor(HasTimeTable, Location, Area, Time) {
        super();
        this.HasTimeTable = HasTimeTable;
        this.Location = Location;
        this.Area = Area;
        this.Time = Time;
    }
}

export function TechnicalReportingData$reflection() {
    return record_type("Domain.TechnicalReportingData", [], TechnicalReportingData, () => [["HasTimeTable", bool_type], ["Location", Location$reflection()], ["Area", ReportingArea$reflection()], ["Time", class_type("System.DateTimeOffset")]]);
}

