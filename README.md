# 桌面版前端規範

## 圖片與容器
1. 容器不要用圖片來撐開高度，所有圖片容器的寬高應該是固定，不受圖片影響
2. 列表類的容器高度需要維持一致，不可因為內容多寡有高度不一的情況
3. 顯示圓形圖片的部分請使用 Bootstrap 的 img-circle class, 不要裁圓形圖片
4. 圖片除了原始尺寸，請分別切成 @2x, @3x 的版本，使用檔名後綴，ICON 類的圖片請分開資料夾 icons, icons@2x, icons@3x, 或者使用 Iconfont/SVG 取代圖片
5. 不需要做 Sprites

## 表單
1. 表單（註冊／發佈／編輯／搜尋）皆使用標準 Bootstrap 表單 HTML 結構，其中 tag 類的設計部分請使用 Checkbox + input:checked 的方式來做 style, 不要使用 jQuery toggleClass 的方式來切換樣式, radio button 亦同
2. 表單元件的部分的 CSS 請獨立拆成一支 form.css 處理，所有表單共用，按鈕類的 component 請沿用 Bootstrap 的 button 類樣式（需要有 hover / pressed  / disabled 等樣式）

## Javascript
1. jQuery 的 event binding 請寫成 $(document).on(‘click’, ‘.something’, function(){});
2. JS 請統一寫在一支 JS 檔案中，不要寫在 HTML
3. 選擇日期的套件請使用 [http://bootstrap-datepicker.readthedocs.io/en/latest/](http://bootstrap-datepicker.readthedocs.io/en/latest/) 去做 style
4. Modal 的部分使用 Bootstrap 提供的 Modal 做 style

## CSS
1. Prefered 使用 SCSS.
