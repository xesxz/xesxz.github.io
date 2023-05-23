function getRadiansOfCamera(

) {
  const position = viewer.camera.position.clone()
  const heading = viewer.camera.heading
  const pitch = viewer.camera.pitch
  const roll = viewer.camera.roll
  return {
    destination: position, //三维笛卡尔坐标
    orientation: {
      heading,
      pitch,
      roll
    }
  }
}