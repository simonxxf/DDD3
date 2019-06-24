var svg = d3.select("#container") 
.append("svg")//生成svg元素
.attr('width',500)
.attr("height",250)


//生成 在svg中g标签
var g = d3.select('svg')
.append('g')
.attr('transform',"translate(50,30)")
 
var data =[
  1,2,3,5,7,8,4,3,7  
]

var line_generator = d3.line()
.x((d,i)=>)

d3.select('g')
.append("path")
.attr('d',line_generator)
