import { Union, Record } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Types.js";
import { bool_type, class_type, string_type, union_type, int32_type, record_type, float64_type } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Reflection.js";
import { int32ToString } from "./.fable/fable-library.3.0.0-nagareyama-beta-004/Util.js";

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

