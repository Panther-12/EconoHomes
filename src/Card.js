import * as am5 from "@amcharts/amcharts5";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import { useLayoutEffect } from "react";

const Card = ({content, title, type, index}) =>{
    const drag = (e)=>{
        e.dataTransfer.setData("text", e.target.id);
        
        var _dragSpaceId = e.target.parentNode.id
        localStorage.setItem("dragSpace", _dragSpaceId)
    }

    useLayoutEffect(()=>{
        const createStock = (data) =>{
            am5.ready(function(){
                let root = am5.Root.new("cardBody_" + index)
                let stockChart = root.container.children.push(
                    am5stock.StockChart.new(root,{})
                )
                let mainPanel = stockChart.panels.push(am5stock.StockPanel.new(root, {
                    wheelY: "zoomX",
                    panX: true,
                    panY: true
                  }));
                let valueAxis = mainPanel.yAxes.push(am5xy.ValueAxis.new(root, {
                    renderer: am5xy.AxisRendererY.new(root, {})
                  }));
                  
                let dateAxis = mainPanel.xAxes.push(am5xy.DateAxis.new(root, {
                    baseInterval: {
                      timeUnit: "day",
                      count: 1
                    },
                    renderer: am5xy.AxisRendererX.new(root, {})
                  }));
                let valueSeries = mainPanel.series.push(am5xy.LineSeries.new(root, {
                    name: "STCK",
                    valueXField: "Date",
                    valueYField: "Close",
                    xAxis: dateAxis,
                    yAxis: valueAxis,
                  }));
                  
                valueSeries.data.setAll(data);
                // root.dispose();
            })
        }
        let data = [
            { Date: 1636495200000, Open: 106.75, High: 119.459999, Low: 95.199997, Close: 100.730003, Volume: 103679500 },
            { Date: 1636581600000, Open: 114.625, High: 125, Low: 108.010002, Close: 122.989998, Volume: 83668200 },
            { Date: 1636668000000, Open: 128.645004, High: 135.199997, Low: 125.25, Close: 129.949997, Volume: 50437500 },
            { Date: 1636927200000, Open: 130.800003, High: 152.529999, Low: 127.510002, Close: 149.360001, Volume: 64982300 },
        ]
        createStock(data)
    })

    return(
        <div className="card" id={"card_"+index} draggable 
        onDragStart={(event)=>drag(event)}>
            <div className="card-header">
                <p>Chart title:{title} </p>
                <p>Chart type:{type}</p>

            </div>
            <div className="card-body" id={"cardBody_"+index}>
                Hello, {"card_"+index}
            </div>
        </div>
    )
}

export default Card;