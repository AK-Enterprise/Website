import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { GLTF } from 'three-stdlib'

type GLTFResult = GLTF & {
	nodes: {
		Object_6: THREE.Mesh
	}
	materials: {
		Base: THREE.MeshStandardMaterial
	}
}

export default function ArmChair(props: JSX.IntrinsicElements['group']) {
	const { nodes, materials } = useGLTF('/Arm_Chair.glb') as GLTFResult
	return (
		<group {...props} dispose={null}>
			<group rotation={[-Math.PI / 2, 0, 0]} scale={0.012}>
				<group rotation={[Math.PI / 2, 0, 0]}>
					<mesh
						castShadow
						receiveShadow
						geometry={nodes.Object_6.geometry}
						material={materials.Base}
						position={[0, 40.986, 0]}
						scale={43.314}
					/>
				</group>
			</group>
		</group>
	)
}

useGLTF.preload('/Arm_Chair.glb')
