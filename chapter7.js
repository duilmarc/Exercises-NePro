function runRobot1(state, robot, memory = []) {
  for (let turn = 0 ;; turn++) {
      if (state.parcels.length == 0) {
        return turn
      }
      let action = robot(state, memory);   // pick a random direction from parcels      
      state = state.move(action.direction); // move to direction 
      memory = action.memory;
  }
}

function compareRobots(robot1, memory1, robot2, memory2) {
let time1 = 0
let time2 = 0
for( let task = 0 ; task < 100 ; ++task ){
  let tasks = VillageState.random()
  time1 += runRobot1(tasks, robot1, memory1)
  time2 += runRobot1(tasks, robot2, memory2)
}
console.log('steps used in robot 1:' , time1/100)
console.log('steps used in robot 2:' , time2/100)
}
compareRobots(routeRobot, [], goalOrientedRobot, []);
