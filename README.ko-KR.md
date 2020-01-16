![intro](./media/ts.png)

# 타입 스트립트 빌드와 테스트 스텐다드

## 폴더 구조
- `config`: 스트립트`[yarn build, yarn test, ...] `를 실행을 위한 설정들이 있습니다. 
- `media`: 문서 작성에 필요한 이미지 비디오 등이 들어 있습니다.
- `src`: 로직 또는 자원 리소스들이 있는 곳 사용 예제가 들어 있습니다.
- `test`: src에 있는 것 들을 테스트 하는 파일들이 있습니다.
 `*.spec.ts` 형식인 파일만 테스트 실행을 합니다. 
- `types`: 프로젝트에 필요한 타입들을 정의 합니다.
    - file: 파일 타입 `*.[ext]` 을 정의 합니다.
    - global: 전역 타입을 정의 합니다.
    - process: process.* 전역 타입을 정의 합니다.
    - window: window.* 전역 타입을 정의 합니다.
- .eslintignore: eslint 중 무시할 패던 설정 입니다.
- .eslint: eslint 설정 입니다.
- .gitignore: git 중 무시할 패던 설정 입니다.
- .npmignore: npm publish 중 무시할 패던 설정 입니다.
- .travis.yml: travis ci 동작 설정 입니다.
- babel.config.js: babel 설정 입니다.webpack babel-loader 에서 자동으로 읽습니다.
- package.json: js 프로젝트 설정 입니다.
- README.md: index 프로젝트 설명 문서 입니다.
- README.ko-KR.md: index 프로젝트 한국어 설명 입니다.
- tsconfig.bundle.json: webpack 번들링을 할 때 사용하는 ts 설정입니다.
- tsconfig.node.json: ts-node 에서 ts 파일을 실행 할 때 사용하는 ts 설정 입니다.
- tsconfig.json: ts 기본 설정 입니다. IDE 에서 기본으로 읽습니다. IDE를 위해 정의 합니다.

## 스크립트들

