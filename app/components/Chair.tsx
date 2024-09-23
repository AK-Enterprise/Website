import * as THREE from "three";
import { useGLTF } from "@react-three/drei";
import { GLTF } from "three-stdlib";

type GLTFResult = GLTF & {
  nodes: {
    part1_chair1_0: THREE.Mesh;
    part2_chair1_0: THREE.Mesh;
    part4_chair1_0: THREE.Mesh;
    part5_chair1_0: THREE.Mesh;
    part6_chair1_0: THREE.Mesh;
    part7_chair1_0: THREE.Mesh;
    part8_chair1_0: THREE.Mesh;
    cushion_Cushion_0: THREE.Mesh;
    basket_chair1_0: THREE.Mesh;
  };
  materials: {
    chair1: THREE.MeshStandardMaterial;
    Cushion: THREE.MeshStandardMaterial;
  };
};

export default function Chair(props: JSX.IntrinsicElements["group"]) {
  const { nodes, materials } = useGLTF("/Chair.glb") as GLTFResult;
  return (
    <group {...props} dispose={null}>
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part1_chair1_0.geometry}
        material={materials.chair1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part2_chair1_0.geometry}
        material={materials.chair1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part4_chair1_0.geometry}
        material={materials.chair1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part5_chair1_0.geometry}
        material={materials.chair1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part6_chair1_0.geometry}
        material={materials.chair1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part7_chair1_0.geometry}
        material={materials.chair1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.part8_chair1_0.geometry}
        material={materials.chair1}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.cushion_Cushion_0.geometry}
        material={materials.Cushion}
      />
      <mesh
        castShadow
        receiveShadow
        geometry={nodes.basket_chair1_0.geometry}
        material={materials.chair1}
      />
    </group>
  );
}

useGLTF.preload("/Chair.glb");
