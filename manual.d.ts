import type { Triplet } from './types';

/**
 * HSL, HLS или HSI (от англ. hue, saturation, lightness (intensity)) — цветовая модель, в которой цветовыми координатами являются тон, насыщенность и светлота.
 * [Соотношения с другими моделями...](https://ru.wikipedia.org/wiki/HSL)
 *
 * In HSL (Hue, Saturation, Lightness) color, the white point is represented by a lightness value of 100% and a saturation value of 0%. The hue value is irrelevant when dealing with white, as it represents a shade of gray regardless of the hue.
 * Therefore, the HSL value for white is hsl(0, 0%, 100%), according to a tutorial on CSS colors.
 */
export const HSLSpace: Space;

/**
 * HWB (Hue, Whiteness, Blackness) is a cylindrical-coordinate representation of points in an RGB color model, similar to HSL and HSV. It was developed by HSV’s creator Alvy Ray Smith in 1996 to address some of the issues with HSV. HWB was designed to be more intuitive for humans to use[1] and slightly faster to compute. The first coordinate, H (Hue), is the same as the Hue coordinate in HSL and HSV. W and B stand for Whiteness and Blackness respectively and range from 0–100% (or 0–1). The mental model is that the user can pick a main hue and then “mix” it with white and/or black to produce the desired color.\
 * _HWB was included in the CSS Level 4 Color Module in 2014._
 *
 * [WIKI](https://en.wikipedia.org/wiki/HWB_color_model)
 */
export const HWBSpace: Space;

/**
 * При разработке Lab преследовалась цель создания цветового пространства, изменение цвета в котором
 * будет более линейным с точки зрения человеческого восприятия (по сравнению с XYZ),
 * то есть с тем, чтобы одинаковое изменение значений координат цвета в разных областях цветового пространства
 * производило одинаковое ощущение изменения цвета.
 *
 * В цветовом пространстве Lab интенсивность света отделена от хроматической составляющей (тон, насыщенность).\
 * Светлота определяется координатой `L`, хроматическая составляющая — двумя декартовыми координатами `a` и `b`.
 *
 * [WIKI](https://en.wikipedia.org/wiki/CIELAB_color_space)
 * | [Цветовая модель Lab (CIELAB) на практике](https://www.fotosklad.ru/expert/articles/lab-na-praktike-cto-eto-zacem-nuzno-fotografu/)
 */
export const LABSpace: Space;

/**
 * Пространство **LCh** служит цилиндрической моделью представления пространства **CIE 1976 Lab**.\
 */
export const LCHSpace: Space;

export const okLCHSpace: Space;
export const okLABSpace: Space;

/**
 * RGB - аддитивная цветовая модель, описывающая способ кодирования цвета для цветовоспроизведения с помощью трёх цветов,
 * которые принято называть основными.
 *
 * Цветовое пространство RGB определяется следующими характеристиками:
 *  - Координаты цветности аддитивных основных цветов — красного, зеленого и синего.
 *  - Цветность точки белого, которая обычно является стандартным источником света.
 *  - Передаточная функция, также известная как кривая тонального отклика или гамма,
 *    которая отображает цветность на трехстимулные значения.
 */
export const RGBModel: Space;

/**
 * Цветовое пространство sRGB охватывает большую часть видимого спектра и позволяет получить точное отображение цветов на большинстве устройств с его поддержкой.\
 * Иногда вы можете встретить упоминание стандарта Rec.709 (BT.709), который по своим возможностям цветовоспроизведения является копией sRGB,
 * но изначально предлагает другие настройки гаммы, задающей контрастность изображения.
 *
 * [Wikipedia](https://en.wikipedia.org/wiki/SRGB)
 */
export const sRGBSpace: Space;

/**
 * Линейная форма цвета sRGB, также называемая линейным sRGB, &mdash; это цветовое пространство, которое является линейным преобразованием стандартного цветового пространства sRGB,
 * устраняющим его нелинейную гамма-коррекцию путем возведения значений RGB в степень 2,2 (или применения обратной гамма-функции).
 * Это делает его подходящим для математических операций, таких как сложение, вычитание, умножение и деление цветов, в отличие от стандартного (нелинейного) sRGB.
 */
export const sRGBLinearSpace: Space;

/**
 * **Adobe RGB (1998)** — цветовое пространство, разработанное компанией _Adobe Systems, Inc._ в 1998 году.\
 * Оно было создано с целью охватить большинство оттенков, достижимых на цветных принтерах CMYK,\
 * но при использовании основных цветов RGB на таких устройствах, как компьютерный дисплей.\
 * Цветовое пространство Adobe RGB (1998) охватывает около 50 % видимых цветов, определяемых цветовым пространством CIELAB,\
 * что улучшает диапазон цветового пространства **sRGB** в зелено-голубых тонах.
 * 
 * _Для достижения требований цветового пространства к отображению цвета_, яркость монитора должна быть 160,00 кд/м2 в белой точке\
 * и 0,5557 кд/м2 в чёрной точке, из чего следует коэффициент контрастности 287,9.\
 * Более того, чёрная точка должна иметь такую же цветность, как и белая, но с яркостью равной 0,0034731% от яркости белой точки.\
 * Уровень освещенности окружающей среды на лицевой панели монитора, когда монитор выключен, должен быть 32 Люкса.
 *
 * [Wikipedia](https://en.wikipedia.org/wiki/Adobe_RGB_color_space)
 */
export const A98RGBSpace: Space;

/**
 * **Display P3** — это широкий цветовой профиль, который предлагает более насыщенный и яркий диапазон цветов.\
 * Пространство Display P3 примерно на 25% шире sRGB, особенно в области красного и зелёного.\
 * Стандарт был разработан Apple, основываясь на цветовом пространстве DCI-P3, которое используется в цифровом кино.
 * 
 * [Wikipedia](https://ru.wikipedia.org/wiki/DCI-P3)
 */
export const DisplayP3Space: Space;

/**
 * Цветовое пространство ProPhoto RGB охватывает более 90% возможных цветов в пространстве L*a*b Международной комиссии по освещению (CIE),\
 * и почти 100% имеющихся в реальном мире цветов поверхности.
 * 
 * [Wikipedia](https://ru.wikipedia.org/wiki/ProPhoto)
 */
export const ProPhotoRGBSpace: Space;
export const Rec2020Space: Space;

/**
 * **XYZ** — это эталонное цветовое пространство, разработанное Международной комиссией по освещению (CIE) в 1931 году.\
 * 
 * Модель CIEXYZ является мастер-моделью практически всех остальных цветовых моделей.\
 * **Канал Y** представляет яркость цвета.\
 * **Канал Z** приблизительно соотносится с интенсивностью **синего**, но значение _Z_ в цветовом пространстве XYZ не идентично значению _B_ в цветовом пространстве RGB.\
 * **Канал X** не имеет ясной цветной аналогии.
 *
 * [WIKI: Meaning of X, Y and Z](https://en.wikipedia.org/wiki/CIE_1931_color_space#Meaning_of_X,_Y_and_Z) |
 * [Перевод](https://translated.turbopages.org/proxy_u/en-ru.ru.4b93d87b-68494692-35524c25-74722d776562/https/en.wikipedia.org/wiki/CIE_1931_color_space) |
 * [Описание мат. модели](https://unick-soft.ru/article.php?id=32) |
 */
export const XYZD65Space: Space;

/**
 * Вариант пространства XYZ с точкой белого **D50**.
 * 
 * **Источник света стандарта CIE D50**\
 * Симулирует теплый дневной свет в восходе солнца или закате с коррелированой цветовой температурой 5003 K.\
 * Также известный как horizon light.
 */
export const XYZD50Space: Space;

/**
 * Определяет местоположения новой точки путём выполнения афинных преобразований над компонентами аддитивной модели
 * исходного пространства **Adobe® 1998 RGB**; с последующим приведением хроматической составляющей к представлению
 * в плоской системе координат цветности и выделением величины светлотности цвета.
 * 
 * Целевое пространство **OKLab**.\
 * Эталонный белый **D65** выставлен для обоих пространств — _калибровка не выполняется_.
 */
export const a98_rgb_into_display_p3: PointReflector;
export const a98_rgb_into_hsl: PointReflector;
export const a98_rgb_into_hwb: PointReflector;
export const a98_rgb_into_lch: PointReflector;
export const a98_rgb_into_oklab: PointReflector;
export const a98_rgb_into_oklch: PointReflector;
export const a98_rgb_into_prophoto_rgb: PointReflector;
export const a98_rgb_into_rec2020: PointReflector;
export const a98_rgb_into_rgb: PointReflector;
export const a98_rgb_into_srgb_linear: PointReflector;
export const a98_rgb_into_srgb: PointReflector;
export const a98_rgb_into_xyz_d50: PointReflector;
export const a98_rgb_into_xyz_d65: PointReflector;
export const a98_rgb_into_xyz: PointReflector;

/**
 * Определяет местоположения новой точки путём выполнения афинных преобразований над компонентами аддитивной модели
 * исходного пространства **Adobe® 1998 RGB**; с последующим приведением хроматической составляющей к представлению
 * в плоской системе координат цветности и выделением величины светлотности цвета.
 * 
 * Целевое пространство **CIE 1976 Lab**, эталонный белый **D50**.\
 * Выполняется калибровка баланса белого от **D65** к **D50** в пространстве _CIE 1931 XYZ_.
 */
export const a98_rgb_into_lab: PointReflector;

/**
 * Определяет местоположения новой точки путём выполнения афинных преобразований над компонентами аддитивной модели
 * исходного пространства **ProPhoto RGB**; с последующим приведением хроматического состава к представлению
 * в плоской системе координат цветности и выделением величины светлотности цвета.
 * 
 * Целевое пространство **CIE Lab**.\
 * Эталонный белый **D50** выставлен для обоих пространств — _калибровка не выполняется_.
 */
export const prophoto_rgb_into_a98_rgb: PointReflector;
export const prophoto_rgb_into_display_p3: PointReflector;
export const prophoto_rgb_into_hsl: PointReflector;
export const prophoto_rgb_into_hwb: PointReflector;
export const prophoto_rgb_into_lab: PointReflector;
export const prophoto_rgb_into_lch: PointReflector;
export const prophoto_rgb_into_oklab: PointReflector;
export const prophoto_rgb_into_oklch: PointReflector;
export const prophoto_rgb_into_rec2020: PointReflector;
export const prophoto_rgb_into_rgb: PointReflector;
export const prophoto_rgb_into_srgb_linear: PointReflector;
export const prophoto_rgb_into_srgb: PointReflector;
export const prophoto_rgb_into_xyz_d50: PointReflector;
export const prophoto_rgb_into_xyz_d65: PointReflector;
export const prophoto_rgb_into_xyz: PointReflector;

export const lab_into_a98_rgb: PointReflector;
export const lab_into_display_p3: PointReflector;
export const lab_into_hsl: PointReflector;
export const lab_into_hwb: PointReflector;
export const lab_into_lch: PointReflector;
export const lab_into_oklab: PointReflector;
export const lab_into_oklch: PointReflector;
export const lab_into_prophoto_rgb: PointReflector;
export const lab_into_rec2020: PointReflector;
export const lab_into_rgb: PointReflector;
export const lab_into_srgb_linear: PointReflector;
export const lab_into_srgb: PointReflector;
export const lab_into_xyz_d50: PointReflector;
export const lab_into_xyz_d65: PointReflector;
export const lab_into_xyz: PointReflector;

/**
 * Возвращает точку в пространстве **CIE Lab**, которая является проекцией координат пространства **CIE LCH**.\
 * Выполняется приведение полярных координат цилиндрической модели **LCh** к декартовых прямоугольным **Lab**,
 * величина светлотности копируется без изменений.
 */
export const display_p3_into_a98_rgb: PointReflector;
export const display_p3_into_hsl: PointReflector;
export const display_p3_into_hwb: PointReflector;
export const display_p3_into_lab: PointReflector;
export const display_p3_into_lch: PointReflector;
export const display_p3_into_oklab: PointReflector;
export const display_p3_into_oklch: PointReflector;
export const display_p3_into_prophoto_rgb: PointReflector;
export const display_p3_into_rec2020: PointReflector;
export const display_p3_into_rgb: PointReflector;
export const display_p3_into_srgb_linear: PointReflector;
export const display_p3_into_xyz_d50: PointReflector;
export const display_p3_into_xyz_d65: PointReflector;
export const display_p3_into_xyz: PointReflector;
export const hsl_into_a98_rgb: PointReflector;
export const hsl_into_display_p3: PointReflector;
export const hsl_into_hwb: PointReflector;
export const hsl_into_lab: PointReflector;
export const hsl_into_lch: PointReflector;
export const hsl_into_oklab: PointReflector;
export const hsl_into_oklch: PointReflector;
export const hsl_into_prophoto_rgb: PointReflector;
export const hsl_into_rec2020: PointReflector;
export const hsl_into_rgb: PointReflector;
export const hsl_into_srgb_linear: PointReflector;
export const hsl_into_srgb: PointReflector;
export const hsl_into_xyz_d50: PointReflector;
export const hsl_into_xyz_d65: PointReflector;
export const hsl_into_xyz: PointReflector;
export const hwb_into_a98_rgb: PointReflector;
export const hwb_into_display_p3: PointReflector;
export const hwb_into_hsl: PointReflector;
export const hwb_into_lab: PointReflector;
export const hwb_into_lch: PointReflector;
export const hwb_into_oklab: PointReflector;
export const hwb_into_oklch: PointReflector;
export const hwb_into_prophoto_rgb: PointReflector;
export const hwb_into_rec2020: PointReflector;
export const hwb_into_rgb: PointReflector;
export const hwb_into_srgb_linear: PointReflector;
export const hwb_into_srgb: PointReflector;
export const hwb_into_xyz_d50: PointReflector;
export const hwb_into_xyz_d65: PointReflector;
export const hwb_into_xyz: PointReflector;
export const lch_into_a98_rgb: PointReflector;
export const lch_into_display_p3: PointReflector;
export const lch_into_hsl: PointReflector;
export const lch_into_hwb: PointReflector;

/**
 * Возвращает точку в пространстве **CIE Lab**, которая является проекцией координат пространства **CIE LCH**.\
 * Выполняется приведение полярных координат цилиндрической модели **LCh** к декартовых прямоугольным **Lab**,
 * величина светлотности копируется без изменений.
 */
export const lch_into_lab: PointReflector;
export const lch_into_oklab: PointReflector;
export const lch_into_oklch: PointReflector;
export const lch_into_prophoto_rgb: PointReflector;
export const lch_into_rec2020: PointReflector;
export const lch_into_rgb: PointReflector;
export const lch_into_srgb_linear: PointReflector;
export const lch_into_srgb: PointReflector;
export const lch_into_xyz_d50: PointReflector;
export const lch_into_xyz_d65: PointReflector;
export const lch_into_xyz: PointReflector;
export const oklab_into_a98_rgb: PointReflector;
export const oklab_into_display_p3: PointReflector;
export const oklab_into_hsl: PointReflector;
export const oklab_into_hwb: PointReflector;
export const oklab_into_lab: PointReflector;
export const oklab_into_lch: PointReflector;
export const oklab_into_oklch: PointReflector;
export const oklab_into_prophoto_rgb: PointReflector;
export const oklab_into_rec2020: PointReflector;
export const oklab_into_rgb: PointReflector;
export const oklab_into_srgb_linear: PointReflector;
export const oklab_into_srgb: PointReflector;
export const oklab_into_xyz_d50: PointReflector;
export const oklab_into_xyz_d65: PointReflector;
export const oklab_into_xyz: PointReflector;
export const oklch_into_a98_rgb: PointReflector;
export const oklch_into_display_p3: PointReflector;
export const oklch_into_hsl: PointReflector;
export const oklch_into_hwb: PointReflector;
export const oklch_into_lab: PointReflector;
export const oklch_into_lch: PointReflector;
export const oklch_into_oklab: PointReflector;
export const oklch_into_prophoto_rgb: PointReflector;
export const oklch_into_rec2020: PointReflector;
export const oklch_into_rgb: PointReflector;
export const oklch_into_srgb_linear: PointReflector;
export const oklch_into_srgb: PointReflector;
export const oklch_into_xyz_d50: PointReflector;
export const oklch_into_xyz_d65: PointReflector;
export const oklch_into_xyz: PointReflector;
export const rec2020_into_a98_rgb: PointReflector;
export const rec2020_into_display_p3: PointReflector;
export const rec2020_into_hsl: PointReflector;
export const rec2020_into_hwb: PointReflector;
export const rec2020_into_lab: PointReflector;
export const rec2020_into_lch: PointReflector;
export const rec2020_into_oklab: PointReflector;
export const rec2020_into_oklch: PointReflector;
export const rec2020_into_prophoto_rgb: PointReflector;
export const rec2020_into_rgb: PointReflector;
export const rec2020_into_srgb_linear: PointReflector;
export const rec2020_into_srgb: PointReflector;
export const rec2020_into_xyz_d50: PointReflector;
export const rec2020_into_xyz_d65: PointReflector;
export const rec2020_into_xyz: PointReflector;
export const rgb_into_a98_rgb: PointReflector;
export const rgb_into_display_p3: PointReflector;
export const rgb_into_hsl: PointReflector;
export const rgb_into_hwb: PointReflector;
export const rgb_into_lab: PointReflector;
export const rgb_into_lch: PointReflector;
export const rgb_into_oklab: PointReflector;
export const rgb_into_oklch: PointReflector;
export const rgb_into_prophoto_rgb: PointReflector;
export const rgb_into_rec2020: PointReflector;
export const rgb_into_xyz_d50: PointReflector;
export const rgb_into_xyz_d65: PointReflector;
export const rgb_into_xyz: PointReflector;
export const srgb_into_a98_rgb: PointReflector;
export const srgb_into_display_p3: PointReflector;
export const srgb_into_hsl: PointReflector;
export const srgb_into_hwb: PointReflector;
export const srgb_into_lab: PointReflector;
export const srgb_into_lch: PointReflector;
export const srgb_into_oklab: PointReflector;
export const srgb_into_prophoto_rgb: PointReflector;
export const srgb_into_rec2020: PointReflector;
export const srgb_into_xyz_d50: PointReflector;
export const srgb_into_xyz_d65: PointReflector;
export const srgb_into_xyz: PointReflector;
export const srgb_linear_into_a98_rgb: PointReflector;
export const srgb_linear_into_display_p3: PointReflector;
export const srgb_linear_into_hsl: PointReflector;
export const srgb_linear_into_hwb: PointReflector;
export const srgb_linear_into_lab: PointReflector;
export const srgb_linear_into_lch: PointReflector;
export const srgb_linear_into_oklab: PointReflector;
export const srgb_linear_into_oklch: PointReflector;
export const srgb_linear_into_prophoto_rgb: PointReflector;
export const srgb_linear_into_rec2020: PointReflector;
export const srgb_linear_into_xyz_d50: PointReflector;
export const srgb_linear_into_xyz_d65: PointReflector;
export const srgb_linear_into_xyz: PointReflector;
export const xyz_d50_into_a98_rgb: PointReflector;
export const xyz_d50_into_display_p3: PointReflector;
export const xyz_d50_into_hsl: PointReflector;
export const xyz_d50_into_hwb: PointReflector;
export const xyz_d50_into_lab: PointReflector;
export const xyz_d50_into_lch: PointReflector;
export const xyz_d50_into_oklab: PointReflector;
export const xyz_d50_into_oklch: PointReflector;
export const xyz_d50_into_prophoto_rgb: PointReflector;
export const xyz_d50_into_rec2020: PointReflector;
export const xyz_d50_into_rgb: PointReflector;
export const xyz_d50_into_srgb_linear: PointReflector;
export const xyz_d50_into_srgb: PointReflector;
export const xyz_d50_into_xyz_d65: PointReflector;
export const xyz_d65_into_a98_rgb: PointReflector;
export const xyz_d65_into_display_p3: PointReflector;
export const xyz_d65_into_hsl: PointReflector;
export const xyz_d65_into_hwb: PointReflector;
export const xyz_d65_into_lab: PointReflector;
export const xyz_d65_into_lch: PointReflector;
export const xyz_d65_into_oklab: PointReflector;
export const xyz_d65_into_oklch: PointReflector;
export const xyz_d65_into_prophoto_rgb: PointReflector;
export const xyz_d65_into_rec2020: PointReflector;
export const xyz_d65_into_rgb: PointReflector;
export const xyz_d65_into_srgb_linear: PointReflector;
export const xyz_d65_into_srgb: PointReflector;
export const xyz_d65_into_xyz_d50: PointReflector;
export const xyz_into_a98_rgb: PointReflector;
export const xyz_into_display_p3: PointReflector;
export const xyz_into_hsl: PointReflector;
export const xyz_into_hwb: PointReflector;
export const xyz_into_lab: PointReflector;
export const xyz_into_lch: PointReflector;
export const xyz_into_oklab: PointReflector;
export const xyz_into_oklch: PointReflector;
export const xyz_into_prophoto_rgb: PointReflector;
export const xyz_into_rec2020: PointReflector;
export const xyz_into_rgb: PointReflector;
export const xyz_into_srgb_linear: PointReflector;
export const xyz_into_srgb: PointReflector;

export function initPointInSpace(colorspace: Space, parameters: TParams): PointInSpace | never;
export function isPointInSpace(entity: unknown): entity is PointInSpace;

/**
 * **Определение цветового тона (Hue)** путём преобразования координат пространства sRGB.
 * 
 * @param r Интенсивность **красного** задаётся _в диапазоне от 0 до 1_
 * @param g Интенсивность **зелёного** задаётся _в диапазоне от 0 до 1_
 * @param b Интенсивность **синего** задаётся _в диапазоне от 0 до 1_
 * @returns **Радианная мера угла** определяется _в диапазоне от -ℼ до +ℼ_
 */
export const convertRgbToHue: (r: number, g: number, b: number) => number;

/**
 * **Коррекция гаммы sRGB** – это нелинейная операция над линейными значениями хроматических компонент цвета,
 * которая корректирует яркость для компенсации нелинейного восприятия яркости человеческим глазом.
 */
export const gam_srgb: PointPositionConverter

/**
 * Преобразование хроматических координат цвета в гамме **sRGB** в линейные RGB-значения**.\
 * Линейные цветовые модели лучше соответствуют тому, как глаз человека воспринимает цвета.\
 * Это означает, что математические операции над значениями цвета будут давать правильный результат.
 */
export const lin_srgb: PointPositionConverter

/**
 * **Коррекция гаммы Rec. 2020** – это нелинейная операция над линейными значениями хроматических компонент цвета,\
 * которая корректирует яркость для компенсации нелинейного восприятия яркости человеческим глазом.
 */
export const gam_rec2020: PointPositionConverter

/**
 * Преобразование хроматических координат цвета в гамме **Rec. 2020 в линейные RGB-значения**.\
 * Линейные цветовые модели лучше соответствуют тому, как глаз человека воспринимает цвета.\
 * Это означает, что математические операции над значениями цвета будут давать правильный результат.
 */
export const lin_rec2020: PointPositionConverter

/**
 * **Коррекция гаммы ProPhoto RGB** – это нелинейная операция над линейными значениями хроматических компонент цвета,\
 * которая корректирует яркость для компенсации нелинейного восприятия яркости человеческим глазом.
 */
export const gam_prophoto: PointPositionConverter

/**
 * Преобразование хроматических координат цвета в гамме **ProPhoto RGB в линейные RGB-значения**.\
 * Линейные цветовые модели лучше соответствуют тому, как глаз человека воспринимает цвета.\
 * Это означает, что математические операции над значениями цвета будут давать правильный результат.
 */
export const lin_prophoto: PointPositionConverter

/**
 * **Коррекция гаммы ProPhoto RGB** – это нелинейная операция над линейными значениями хроматических компонент цвета,\
 * которая корректирует яркость для компенсации нелинейного восприятия яркости человеческим глазом.
 */
export const gam_p3: PointPositionConverter

/**
 * Преобразование хроматических координат цвета в гамме **ProPhoto RGB в линейные RGB-значения**.\
 * Линейные цветовые модели лучше соответствуют тому, как глаз человека воспринимает цвета.\
 * Это означает, что математические операции над значениями цвета будут давать правильный результат.
 */
export const lin_p3: PointPositionConverter

export default initPointInSpace;

export interface PointInSpace extends Iterable<number> {
	readonly buffer: ArrayBuffer;
	readonly colorspace: SpaceID;
	readonly space: Space;

	get adapted(): IteratorObject<number>;
	get position(): IteratorObject<number>;
	entries(): IteratorObject<[SpatialDimension, number]>;
	equals(pins: PointInSpace, epsilon?: number): boolean;
	set(parameters: Iterable<number>): PointInSpace;
	values(): IteratorObject<number>;

	readonly length: 3;
	get 0(): number;
	set 0(value: number | string);
	get 1(): number;
	set 1(value: number | string);
	get 2(): number;
	set 2(value: number | string);
}

export interface PointReflector {
	name: string;
	(point: PointInSpace): PointInSpace;
}

interface CoordinateSystem extends Iterable<SpatialDimension> {
	readonly 0: SpatialDimension;
	readonly 1: SpatialDimension;
	readonly 2: SpatialDimension | undefined;
	readonly length: 2 | 3;
	readonly tgeom: 'circle' | 'plane' | 'cilinder' | 'cube';
	adapt?: (c1: number, c2: number, c3: number) => Triplet;
	entries(): Iterator<[0 | 1 | 2, SpatialDimension]>;
	toArray(): Array<SpatialDimension>;
}

type DimKey =
	| 'a'
	| 'b'
	| 'B'
	| 'C'
	| 'c'
	| 'G'
	| 'g'
	| 'h'
	| 'L'
	| 'R'
	| 'r'
	| 'S'
	| 'W'
	| 'x'
	| 'y'
	| 'z'
	| 'phi'
	| 'rho';

type DimID =
	| 'abscissa'
	| 'angle'
	| 'applicate'
	| 'blackness'
	| 'blue-yellow'
	| 'blue'
	| 'chroma'
	| 'green'
	| 'hue'
	| 'lightness'
	| 'ordinate'
	| 'radius'
	| 'green-red'
	| 'red'
	| 'saturation'
	| 'whiteness';

type TParams = ArrayBufferLike | Triplet<number> | ArrayLike<number>;

type PointPositionConverter = (pins: PointInSpace) => IteratorObject<number>;

export type SpaceID =
	| UniqSpaceID
	| 'rgb'
	| 'xyz';

export type Space = {
	ident: SpaceID;
	/**
	 * A color appearance model (CAM) is a mathematical model that seeks to describe the perceptual aspects of human color vision, i.e. viewing conditions under which the appearance of a color does not tally with the corresponding physical measurement of the stimulus source. (In contrast, a color model defines a coordinate space to describe colors, such as the RGB and CMYK color models.)
	 * 
	 * A uniform color space (UCS) is a color model that seeks to make the color-making attributes perceptually uniform, i.e. identical spatial distance between two colors equals identical amount of perceived color difference. A CAM under a fixed viewing condition results in a UCS; a UCS with a modeling of variable viewing conditions results in a CAM. A UCS without such modelling can still be used as a rudimentary CAM.
	 *
	 * [WIKI](https://en.wikipedia.org/wiki/Color_appearance_model)
	 */
	CAM?: CoordinateSystem;
	CSYS: CoordinateSystem;
	whitepoint: Float64Array<ArrayBuffer>;
};

type SpatialDimension = {
	$coord?: SpatialDimension;
	ident: DimID;
	short: DimKey;

	bytes: 1 | 2 | 4 | 8;
	domain: Range;
	input?: (parameter: number, range?: Range) => number;
	output?: (value: number) => number;

	tgeom?: 'altitude' | 'azimuth' | 'directed-line' | 'reference-ray';
	tcoord?: 'cartesian-coordinate-axis' | 'polar';
};

export type UniqSpaceID =
	| 'a98-rgb'
	| 'display-p3'
	| 'hsl'
	| 'hwb'
	| 'lab'
	| 'lch'
	| 'oklab'
	| 'oklch'
	| 'prophoto-rgb'
	| 'rec2020'
	| 'srgb-linear'
	| 'srgb'
	| 'xyz-d50'
	| 'xyz-d65';