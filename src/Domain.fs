module Domain
    open System

    type PowerResults =
        { Average: float
          Min: float
          Max: float }
 
    module Ids =
        type AggregatId =
            | AggregatId of AggregatId: int
            member this.GetValue = (fun (AggregatId id) -> id) this
            member this.GetValueAsByte = (fun (AggregatId id) -> byte id) this

        type LocationId =
            | LocationId of locationId: int
            member this.GetValue = (fun (LocationId id) -> id) this
            member this.GetValueAsString = (fun (LocationId id) -> string id) this
        
    type Location =
        { BhkwProducer: string
          AggregatId: Ids.AggregatId
          InstalledPower: float
          PlantName: string
          LocationId: Ids.LocationId }
    type TimeTableFulfilment =
        { AfterTime: float
          AfterEnergy: float }

    type Status =
        | IsRunningOk
        | OperatingCounterBroken
        | ShutDown of Ids.LocationId
        | MissingData of Ids.LocationId
        | StrangeError
    type TechnicalReportDataCC =
        { PlantName: string
          ReducedPowerInPartialLoad: int
          OperationHours: int
          DownTime: TimeSpan
          PowerResults: PowerResults
          PartialLoad: TimeSpan
          ReturnTemp: TimeSpan
          Starts: float
          Status: Status }
    type TechnicalReportDataBMBHKW =
        { PlantName: string
          TimeTable: TimeSpan
          OperatingTime: TimeSpan
          TimeTableFulfilment: TimeTableFulfilment
          PowerResults: PowerResults
          DownTime: TimeSpan
          BufferFillingLevelAtSwitchOff: string
          DisturbedTime: TimeSpan
          Blocks: string
          Status: Status }      
    type ReportingArea =
        | CC of TechnicalReportDataCC
        | BM of TechnicalReportDataBMBHKW

    type TechnicalReportingData =
        { HasTimeTable: bool
          Location: Location  
          Area: ReportingArea
          Time: DateTimeOffset }