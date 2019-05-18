# react-junkiesflow
junkiesflow(CORDAW)는 손으로 그린 알고리즘을 코드로 만들어주는 프로젝트입니다.

2019 JunctionXSeoul에서 진행한 작품으로 Rakuten Rapid API를 이용하여 개발하였습니다.

## Getting Start
```
npm install
npm start
```
Create-React-App 기반으로 제작되었습니다.

주요하게 사용하고 있는 라이브러리는 MobX, axios 입니다.

자세한 dependencies, scripts는 package.json을 참고해주시면 됩니다.
## File Structure
```
public
 - image
  - favicon.ico
  - index.html
  - manifest.json
src
 - api
 - components
 - pages
 - stores
 - App.js
 - App.scss
 - index.js
 - index.scss
 - serviceWorker.js
```
### public
배포에 필요한 파일을 불러오기 위한 폴더입니다.
### api
api주소를 저장하고 있는 폴더입니다.
### components
component를 담고 있는 폴더로 index.js를 이용하여 import를 관리합니다.
- Button
- ChooseButton
- CodeDropDown
- ConverButton
- Copyright
- Header
- Loader
### page
뷰페이지와 로직을 관리하는 폴더로 index.js를 이용하여 import를 관리합니다. 
- Upload : 이미지를 업로드하는 페이지입니다.
- Result : 변환된 코드를 참고 및 수정하며 컴파일 결과를 볼 수 있습니다.
## Function
- `submitConvert()` : react-webcam, 사진을 캡쳐를 위함
- `onData()` : react-mic, 마이크에 들어오는 음성을 받기 위함
- `onStop()` : react-mic, 마이크 정지
- `onApplause()` : 박수 효과

## Version History
| Date  | Version | author |
| ------------- | ------------- | ------------- |
| 2019.05.19   | v1.0.0 | 이학성 |
