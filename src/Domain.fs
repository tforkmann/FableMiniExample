module Domain
    open System
    type PlantType =
        | CCTechnicalReportPlants
        | BmBhkwTechnicalReportPlants
        | EGBhkwTechnicalReportPlants
        member this.GetValue =
            match this with
            | CCTechnicalReportPlants -> "CCTechnicalReportPlants"
            | BmBhkwTechnicalReportPlants -> "BmBhkwTechnicalReportPlants"
            | EGBhkwTechnicalReportPlants -> "EGBhkwTechnicalReportPlants"

        member this.GetValueDE =
            match this with
            | CCTechnicalReportPlants -> "CityCube"
            | BmBhkwTechnicalReportPlants -> "BM-BHKW und BMKW mit Fahrplan"
            | EGBhkwTechnicalReportPlants -> "restliche BHKW"
    type Units =
        | KW
        | Keine
        | Degree
        | KWh
        | MWh
        | Percent
        | Hours
    type Parameters =
        | TemperaturRl = 5uy
        | LeistungEl = 10uy
        | LeistungTh = 11uy
        | Anforderung = 24uy
        | Temperatur = 26uy
        | Fuellstand = 32uy
        | Betrieb = 33uy
        | Stoerung = 34uy
        | Betriebsstunden = 42uy
        | Starts = 46uy
        | FahrplanPrognose = 201uy
    let machedUnitIdToUnit (unitId: byte) =
        match unitId with
        | 1uy -> Keine
        | 2uy -> Degree
        | 3uy -> KW
        | 4uy -> KWh
        | 11uy -> MWh
        | 14uy -> Percent
        | 20uy -> Hours
        | x ->
            printfn "unmatched unitId %i" x
            failwithf "unmatched unitId %i" x

    let matchParameterIdToParameter (parameterId: byte) =
        match parameterId with
        | 5uy -> Parameters.TemperaturRl
        | 10uy -> Parameters.LeistungEl
        | 11uy -> Parameters.LeistungTh
        | 24uy -> Parameters.Anforderung
        | 26uy -> Parameters.Temperatur
        | 32uy -> Parameters.Fuellstand
        | 33uy -> Parameters.Betrieb
        | 34uy -> Parameters.Stoerung
        | 42uy -> Parameters.Betriebsstunden
        | 46uy -> Parameters.Starts
        | 201uy -> Parameters.FahrplanPrognose
        | x ->
            printfn "unmatched parameterId %i" x
            failwithf "unmatched parameterId %i" x

    let matchParameterIdToDesc (parameterId: byte) =
        match parameterId with
        | 5uy -> "TemperaturRl"
        | 10uy -> "LeistungEl"
        | 11uy -> "LeistungTh"
        | 24uy -> "Anforderung"
        | 26uy -> "Temperatur"
        | 32uy -> "Fuellstand"
        | 33uy -> "Betrieb"
        | 34uy -> "Stoerung"
        | 42uy -> "Betriebsstunden"
        | 46uy -> "Starts"
        | 201uy -> "FahrplanPrognose"
        | x ->
            printfn "unmatched parameterId %i" x
            failwithf "unmatched parameterId %i" x
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
    // module Charts =
    //     type DataRecordChart =
    //         { Time: string
    //           UnitOfMeasure: string
    //           Value: float
    //           DataPoint: string }

    //     type ChartElements =
    //         | Electric
    //         | BiomethanOriginal
    //         | BiomethanCorrected
    //         | BiomethanOriginalDME
    //         | BiomethanCorrectedDME
    //         | Outliers

    //     type DataMeters =
    //         { ElectricValue: float
    //           BiomethanOriginalValue: float
    //           BiomethanCorrectedValue: float
    //           BiomethanOriginalDMEValue: float
    //           BiomethanCorrectedDMEValue: float
    //           Outliers: float
    //           Time: string
    //           Unit: string }

    //     type ChartType =
    //         | Area
    //         | Line

    //     type Position =
    //         | Top
    //         | Left
    //         | Right
    //         | Center
    //         | Bottom
    //         | InsideLeft
    //         | InsideRight
    //         member this.GetValue =
    //             match this with
    //             | Top -> "top"
    //             | Left -> "left"
    //             | Right -> "right"
    //             | Center -> "center"
    //             | Bottom -> "bottom"
    //             | InsideLeft -> "insideLeft"
    //             | InsideRight -> "insideRight"
    //     type DetailedDataRecordChart =
    //         { Time: string
    //           UnitOfMeasure: string
    //           Value: float }
        
    //     module ColorHelper =
    //     ///Function to match a colorName to a colorIndex
    //         type Color =
    //             | Aqua
    //             | LightBlue
    //             | Grey
    //             | LightGrey
    //             | Lime
    //             | GreenYellow
    //             | Pink
    //             | Black
    //             | White
    //             | Red
    //             | Green
    //             | DarkGreen
    //             | Blue
    //             | Magenta
    //             | DeepSkyBlue
    //             | DanpowerBlue
    //             | MediumBlue
    //             | DarkGray
    //             | Gray
    //             | LightYellow
    //             | LightGray
    //             | MidnightBlue
    //             | DarkOrange
    //             | DodgerBlue
    //             | DarkTurquoise
    //             | Turquoise
    //             | Yellow
    //             | Orange
    //             | YellowGreen
    //             member this.GetValue =
    //                 match this with
    //                 | Aqua -> "rgba(0, 255, 255,0.5)"
    //                 | Red -> "red"
    //                 | Blue -> "blue"
    //                 | LightBlue -> "lightblue"
    //                 | Orange -> "orange"
    //                 | Green -> "green"
    //                 | Grey -> "grey"
    //                 | LightGrey -> "rgba(211, 211, 211,0.5)"
    //                 | Lime -> "lime"
    //                 | GreenYellow -> "greenyellow"
    //                 | Pink -> "rgba(255, 192, 203,0.5)"
    //                 | Black -> failwith "Not Implemented"
    //                 | White -> failwith "Not Implemented"
    //                 | DarkGreen -> failwith "Not Implemented"
    //                 | Magenta -> failwith "Not Implemented"
    //                 | DeepSkyBlue -> failwith "Not Implemented"
    //                 | DanpowerBlue -> failwith "Not Implemented"
    //                 | MediumBlue -> failwith "Not Implemented"
    //                 | DarkGray -> failwith "Not Implemented"
    //                 | Gray -> failwith "Not Implemented"
    //                 | LightYellow -> failwith "Not Implemented"
    //                 | LightGray -> failwith "Not Implemented"
    //                 | MidnightBlue -> failwith "Not Implemented"
    //                 | DarkOrange -> failwith "Not Implemented"
    //                 | DodgerBlue -> failwith "Not Implemented"
    //                 | DarkTurquoise -> failwith "Not Implemented"
    //                 | Turquoise -> failwith "Not Implemented"
    //                 | Yellow -> failwith "Not Implemented"
    //                 | YellowGreen -> failwith "Not Implemented"

    //             member this.GetValueDE =
    //                 match this with
    //                 | Aqua -> "aqua"
    //                 | Red -> "red"
    //                 | Blue -> "blue"
    //                 | LightBlue -> "lightblue"
    //                 | Orange -> "orange"
    //                 | Green -> "green"
    //                 | Grey -> "grey"
    //                 | LightGrey -> "lightgrey"
    //                 | Lime -> "LimonenGrün"
    //                 | GreenYellow -> "grüngelb"
    //                 | Pink -> "pink"
    //                 | Black -> failwith "Not Implemented"
    //                 | White -> failwith "Not Implemented"
    //                 | DarkGreen -> failwith "Not Implemented"
    //                 | Magenta -> failwith "Not Implemented"
    //                 | DeepSkyBlue -> failwith "Not Implemented"
    //                 | DanpowerBlue -> failwith "Not Implemented"
    //                 | MediumBlue -> failwith "Not Implemented"
    //                 | DarkGray -> failwith "Not Implemented"
    //                 | Gray -> failwith "Not Implemented"
    //                 | LightYellow -> failwith "Not Implemented"
    //                 | LightGray -> failwith "Not Implemented"
    //                 | MidnightBlue -> failwith "Not Implemented"
    //                 | DarkOrange -> failwith "Not Implemented"
    //                 | DodgerBlue -> failwith "Not Implemented"
    //                 | DarkTurquoise -> failwith "Not Implemented"
    //                 | Turquoise -> failwith "Not Implemented"
    //                 | Yellow -> failwith "Not Implemented"
    //                 | YellowGreen -> failwith "Not Implemented"
        
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
    // type ChartData =
    //     { Parameter: Parameters
    //       Color: Charts.ColorHelper.Color
    //       Axes: string
    //       Unit: string
    //       ChartType: Charts.ChartType
    //       DetailedDataRecords: Charts.DetailedDataRecordChart [] }      
    