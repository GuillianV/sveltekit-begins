import{B as y,b as G,b1 as E,aY as b,aX as T}from"./three.module.5693092b.js";function A(t,l=!1){const i=t[0].index!==null,m=new Set(Object.keys(t[0].attributes)),u=new Set(Object.keys(t[0].morphAttributes)),f={},e={},a=t[0].morphTargetsRelative,n=new y;let h=0;for(let r=0;r<t.length;++r){const s=t[r];let c=0;if(i!==(s.index!==null))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". All geometries must have compatible attributes; make sure index attribute exists among all geometries, or in none of them."),null;for(const o in s.attributes){if(!m.has(o))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+'. All geometries must have compatible attributes; make sure "'+o+'" attribute exists among all geometries, or in none of them.'),null;f[o]===void 0&&(f[o]=[]),f[o].push(s.attributes[o]),c++}if(c!==m.size)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". Make sure all geometries have the same number of attributes."),null;if(a!==s.morphTargetsRelative)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". .morphTargetsRelative must be consistent throughout all geometries."),null;for(const o in s.morphAttributes){if(!u.has(o))return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+".  .morphAttributes must be consistent throughout all geometries."),null;e[o]===void 0&&(e[o]=[]),e[o].push(s.morphAttributes[o])}if(l){let o;if(i)o=s.index.count;else if(s.attributes.position!==void 0)o=s.attributes.position.count;else return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed with geometry at index "+r+". The geometry must have either an index or a position attribute"),null;n.addGroup(h,o,r),h+=o}}if(i){let r=0;const s=[];for(let c=0;c<t.length;++c){const o=t[c].index;for(let d=0;d<o.count;++d)s.push(o.getX(d)+r);r+=t[c].attributes.position.count}n.setIndex(s)}for(const r in f){const s=p(f[r]);if(!s)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" attribute."),null;n.setAttribute(r,s)}for(const r in e){const s=e[r][0].length;if(s===0)break;n.morphAttributes=n.morphAttributes||{},n.morphAttributes[r]=[];for(let c=0;c<s;++c){const o=[];for(let g=0;g<e[r].length;++g)o.push(e[r][g][c]);const d=p(o);if(!d)return console.error("THREE.BufferGeometryUtils: .mergeGeometries() failed while trying to merge the "+r+" morphAttribute."),null;n.morphAttributes[r].push(d)}}return n}function p(t){let l,i,m,u=0;for(let a=0;a<t.length;++a){const n=t[a];if(n.isInterleavedBufferAttribute)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. InterleavedBufferAttributes are not supported."),null;if(l===void 0&&(l=n.array.constructor),l!==n.array.constructor)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.array must be of consistent array types across matching attributes."),null;if(i===void 0&&(i=n.itemSize),i!==n.itemSize)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.itemSize must be consistent across matching attributes."),null;if(m===void 0&&(m=n.normalized),m!==n.normalized)return console.error("THREE.BufferGeometryUtils: .mergeAttributes() failed. BufferAttribute.normalized must be consistent across matching attributes."),null;u+=n.array.length}const f=new l(u);let e=0;for(let a=0;a<t.length;++a)f.set(t[a].array,e),e+=t[a].array.length;return new G(f,i,m)}function x(t,l){if(l===E)return console.warn("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Geometry already defined as triangles."),t;if(l===b||l===T){let i=t.getIndex();if(i===null){const e=[],a=t.getAttribute("position");if(a!==void 0){for(let n=0;n<a.count;n++)e.push(n);t.setIndex(e),i=t.getIndex()}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Undefined position attribute. Processing not possible."),t}const m=i.count-2,u=[];if(l===b)for(let e=1;e<=m;e++)u.push(i.getX(0)),u.push(i.getX(e)),u.push(i.getX(e+1));else for(let e=0;e<m;e++)e%2===0?(u.push(i.getX(e)),u.push(i.getX(e+1)),u.push(i.getX(e+2))):(u.push(i.getX(e+2)),u.push(i.getX(e+1)),u.push(i.getX(e)));u.length/3!==m&&console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unable to generate correct amount of triangles.");const f=t.clone();return f.setIndex(u),f.clearGroups(),f}else return console.error("THREE.BufferGeometryUtils.toTrianglesDrawMode(): Unknown draw mode:",l),t}function w(t,l=!1){return console.warn("THREE.BufferGeometryUtils: mergeBufferGeometries() has been renamed to mergeGeometries()."),A(t,l)}export{w as m,x as t};