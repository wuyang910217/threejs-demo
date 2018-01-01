import * as THREE from 'three'

class Demo {
  private scene: THREE.Scene
  private camera: THREE.PerspectiveCamera
  private renderer: THREE.WebGLRenderer
  private material: THREE.MeshNormalMaterial
  private geometry: THREE.BoxGeometry
  private cube: THREE.Mesh

  private width: number = window.innerWidth
  private height: number = window.innerHeight

  constructor() {
    this.init()
  }

  init(): void {
    //创建场景.
    this.scene = new THREE.Scene()

    // 相机
    this.camera = new THREE.PerspectiveCamera(
      75,
      this.width / this.height,
      0.1,
      1000,
    )

    //渲染器
    this.renderer = new THREE.WebGLRenderer()
    //设置画布大小
    this.renderer.setSize(this.width, this.height)
    //加入到body
    document.body.appendChild(this.renderer.domElement)

    window.addEventListener('resize', () => {
      this.width = window.innerWidth
      this.height = window.innerHeight
      this.renderer.setSize(this.width, this.height)
      this.camera.aspect = this.width / this.height
      this.camera.updateProjectionMatrix()
    })

    // let control = new THREE.OrbitControls(this.camera, this.renderer.domElement)

    //第二步,创建几何体.
    this.geometry = new THREE.BoxGeometry(1, 1, 1)
    this.material = new THREE.MeshNormalMaterial()
    this.cube = new THREE.Mesh(this.geometry, this.material)
    //加入到场景
    this.scene.add(this.cube)

    //设置相机位置
    this.camera.position.z = 5
  }

  //渲染循环
  public animate = () => {
    requestAnimationFrame(this.animate)
    this.cube.rotation.x += 0.1
    this.cube.rotation.y += 0.1
    this.renderer.render(this.scene, this.camera)
  }
}

const demo = new Demo()
demo.animate()
