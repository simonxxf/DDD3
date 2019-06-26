 const width = 500
 const height = 250
 margin = {left:50,top:30,right:20,bottom:20}
 g_width = width - margin.left - margin.right
 g_height = height-margin.top-margin.bottom


const svg = d3.select("#container") 
.append("svg")//生成svg元素
.attr('width',width)
.attr("height",height)


//生成 在svg中g标签
const g = d3.select('svg').append('g')

.attr('transform',`translate(${margin.left},${margin.top})`)

const data =[1,3,5,7,8,4,3,7]
  
const scale_x=d3.scaleLinear() //比列尺缩放
      .domain([0,data.length-1])//输入的范围x坐標軸
      // .domain(data.map((O,i)=>i))
      .range([0,g_width])    //输出的范围

const scale_y=d3.scaleLinear()
      .domain([0,d3.max(data)])//输入的范围y坐標軸
      .range([g_height,0])
 


const line_generator = d3.line()
.x((d,i)=>scale_x(i))
.y((d,i)=>scale_y(d))
.curve(d3.curveBasis) //曲线拟合的一种方式

g
.append("path")
.attr('d',line_generator(data))


const x_axis=d3.axisBottom(scale_x)  //x坐标轴

const y_axis=d3.axisLeft(scale_y)

g.append('g')
.call(x_axis)
.attr('transform',`translate(0,${g_height})`)

g.append('g')
.call(y_axis)
.attr('transform',`translate(0,0)`)
