import * as d3 from 'd3'

export default {
  // Determines size of the circle
  memberValue: 10,
  padding: {
    circleWithoutSubCircle: 3,
    circleWithSubCircles: 3,
    circleWithSingleSubCircle: 5,
    membersCircle: 0.5,
  },
  zoom: {
    scaleExtent: [0.05, 3],
    transition: d3.easeCubicOut,
    duration: 500,
  },
  highlight: {
    transition: d3.easeCircleOut,
    duration: 150,
    increaseRadius: 5,
  },
  move: {
    transition: d3.easeCubicInOut,
    duration: 500,
  },
  style: {
    fontFamily: 'basier_circle',
  },
}
