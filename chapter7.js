function runRobot1(state, robot, memory = []) {
    let turn=0;
    for (;; turn++) {
        if (state.parcels.length == 0) {
        break;
        }
        let action = robot(state, memory);   // pick a random direction from parcels      
        state = state.move(action.direction); // move to direction 
        memory = action.memory;
    }
    return turn
  }

function compareRobots(robot1, memory1, robot2, memory2) {
  let tasks= VillageState.random()
  let time1 = runRobot1(tasks, robot1, memory1)
  let time2 = runRobot1(tasks, robot2, memory2)
  console.log(time1,time2)
  
}

compareRobots(routeRobot, [], goalOrientedRobot, []);
