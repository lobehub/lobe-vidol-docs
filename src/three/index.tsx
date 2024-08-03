import { useEffect, useRef } from 'react';
import * as THREE from 'three';

export default () => {
  const mapRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (mapRef?.current) {
      let scene = new THREE.Scene();
      let geometry = new THREE.BoxGeometry(100, 100, 100); //创建一个立方体几何对象Geometry
      let material = new THREE.MeshLambertMaterial({
        color: 0xFF_FF_FF,
      });
      let mesh = new THREE.Mesh(geometry, material); //网格模型对象Mesh
      scene.add(mesh); //网格模型添加到场景中

      let point = new THREE.PointLight(0xFF_FF_FF);
      point.position.set(400, 200, 300);
      scene.add(point); //点光源添加到场景中
      //环境光
      let ambient = new THREE.AmbientLight(0x44_44_44);
      scene.add(ambient);
      /**
       * 相机设置
       */
      let width = 760; //窗口宽度
      let height = 640; //窗口高度
      let k = width / height; //窗口宽高比
      let s = 200; //三维场景显示范围控制系数，系数越大，显示的范围越大
      //创建相机对象
      let camera = new THREE.OrthographicCamera(-s * k, s * k, s, -s, 1, 1000);
      camera.position.set(200, 300, 200); //设置相机位置
      camera.lookAt(scene.position); //设置相机方向(指向的场景对象)
      /**
       * 创建渲染器对象
       */
      let renderer = new THREE.WebGLRenderer();
      renderer.setSize(width, height); //设置渲染区域尺寸
      renderer.setClearColor(0xB9_D3_FF, 1); //设置背景颜色
      mapRef?.current?.append(renderer.domElement); //body元素中插入canvas对象
      //执行渲染操作   指定场景、相机作为参数
      renderer.render(scene, camera);
    }
  }, [mapRef]);

  return <div id="map" ref={mapRef} style={{ height: '100%', width: '100%' }}></div>;
};
