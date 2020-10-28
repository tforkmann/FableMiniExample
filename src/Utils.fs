module Utils

open Domain
open System

let getColorBM (rowData: TechnicalReportingData) =
    let ccData =
        match rowData.Area with
        | CC data -> data
        | _ -> failwithf "wrong %A" rowData.Area  
    ccData