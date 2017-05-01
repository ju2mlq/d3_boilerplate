import * as d3 from 'd3'

const width = window.innerWidth,
      height = window.innerHeight

const svg = d3.select('body')
  .append('svg')
    .attr('width', width)
    .attr('height', height)
