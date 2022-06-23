let engine_loop = new loop(engine_update);
let engine_time = new time();
engine_loop.start();

async function engine_update(ts) {
  engine_time.update(ts);
  if(engine_loop.ticks == 0) {
    await setup();
    engine_loop.update();
    return;
  }
  
  await update(engine_time);
  keyboard.update();
  mouse.update();
  engine_loop.update();
}