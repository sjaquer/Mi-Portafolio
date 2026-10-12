export interface PoemColor {
  accent: string;
  gradient: string;
  glow: string;
  border: string;
}

export interface Poema {
  id: string;
  titulo: string;
  contenido: string;
  color: PoemColor;
}

const colorPalette: PoemColor[] = [
  {
    accent: "#d97706",
    gradient: "linear-gradient(135deg, #d97706, #f59e0b)",
    glow: "rgba(217,119,6,0.08)",
    border: "rgba(217,119,6,0.2)",
  },
  {
    accent: "#3b82f6",
    gradient: "linear-gradient(135deg, #3b82f6, #60a5fa)",
    glow: "rgba(59,130,246,0.08)",
    border: "rgba(59,130,246,0.2)",
  },
  {
    accent: "#b91c1c",
    gradient: "linear-gradient(135deg, #b91c1c, #dc2626)",
    glow: "rgba(185,28,28,0.08)",
    border: "rgba(185,28,28,0.2)",
  },
  {
    accent: "#7c3aed",
    gradient: "linear-gradient(135deg, #7c3aed, #a855f7)",
    glow: "rgba(124,58,237,0.08)",
    border: "rgba(124,58,237,0.2)",
  },
  {
    accent: "#0d9488",
    gradient: "linear-gradient(135deg, #0d9488, #14b8a6)",
    glow: "rgba(13,148,136,0.08)",
    border: "rgba(13,148,136,0.2)",
  },
  {
    accent: "#db2777",
    gradient: "linear-gradient(135deg, #db2777, #f472b6)",
    glow: "rgba(219,39,119,0.08)",
    border: "rgba(219,39,119,0.2)",
  },
  {
    accent: "#059669",
    gradient: "linear-gradient(135deg, #059669, #34d399)",
    glow: "rgba(5,150,105,0.08)",
    border: "rgba(5,150,105,0.2)",
  },
  {
    accent: "#ea580c",
    gradient: "linear-gradient(135deg, #ea580c, #fb923c)",
    glow: "rgba(234,88,12,0.08)",
    border: "rgba(234,88,12,0.2)",
  },
  {
    accent: "#4f46e5",
    gradient: "linear-gradient(135deg, #4f46e5, #818cf8)",
    glow: "rgba(79,70,229,0.08)",
    border: "rgba(79,70,229,0.2)",
  }
];

const poemasRaw = [
  {
    id: "supervivencia-burda",
    titulo: "Supervivencia Burda",
    contenido: `Es curioso, porque las mascotas no tienen un pensamiento en sí, no hay conciencia, solo supervivencia, instinto natural. Yo le doy comida y ella existe para complacer mi necesidad de compañía, aunque fuera de una manera muy burda y existencial. Funcionamos porque no es un trato, yo solo doy comida y ella solo acepta vivir con eso. No hay una clave secreta, no hay nada más que entender. Es un trato mundano en el que ella vive y yo vivo por ella, parece más una bebé que una mascota. Yo la amo, pero ella está acostumbrada a saber que existo en su mundo, ¿Y está feliz? No estoy seguro. A lo mejor ni siquiera sabe qué es el mañanª, o piensa en la muerte. Al fin y al cabo, es mi gata y yo su esclavo a conciencia. No es lo mismo dar mi amor y alma incondicional a un gato que a otra persona, yo no salgo decepcionado porque no me elige. Solo tomo lo que considero que es amor, y lo transformo en otra creencia más en mi mente, intentando pensar que algún día sea más fácil de entender todo. Como ella.`
  },
  {
    id: "eleccion-consciente",
    titulo: "Elección Consciente",
    contenido: `Cuando alguien tema perderme, sabré que es una idea absurda. Aún cargo con el pesar de nunca ser la elección consciente de nadie. Mis parents tuvieron razón: nadie me amará igual. Pero ellos me eligieron al darme la vida, y luego… no tuvieron más opción que amarme. ¿Es eso amor real o solo instinto? ¿Y yo? ¿Dónde entro yo en una ecuación donde no tuve voz, ni voto, ni decisión de nacer? Me encuentro perdido, entregando todo sin ser dueño de nada. A la gente le gusta lo que doy, pero no quien soy. Y en este sinvivir, la pregunta vuelve: si soy tan fácil de tener, ¿por qué nadie tiene miedo de perderme?`
  },
  {
    id: "dueno-del-sueno",
    titulo: "Dueño del Sueño",
    contenido: `La nostalgia me apresura. Ya no siento el dolor que sentía hace poco, todo tiene un nuevo color.
¿Pero qué pasa con mi pasado? Pienso que vago sin un rumbo claro en la aspiración de mi amor decayendo.
La niña de hermosos ojos ya no está a mi lado. Dejaría mi mundo con tal de verla de nuevo, abrazarla, darle todo lo que llevo aguantando desde su partida.
La muerte ya no parece tan poderosa; cobra sentido no saber cuándo llegue. Me gusta pensar en cómo sería mi vida si estuviera aquí, pero esta nostalgia me está matando.
Desearía morir para estar lo más cerca posible del cielo. Quiero morir destrozado por su alma.
Sentir el calor de la muerte en su forma de mirarme.
Mi alma pertenece a este ser y quiero permanecer en él. Morir ya no asusta porque mi anhelo es su ser. Quiero ser destrozado con mucho amor para que mi alma pida a gritos ser elegida.
Quiero ser más. Destruir todo a mi paso, enloquecer con todos los métodos, encariñarme de mi proceso sin dejarme de lado.
Quiero poder dormir tranquilo, sin miedo a dejar de respirar. Ahogarme en un mar sin fin, desahogarme en sitios extraordinarios. Soltar todo lo que llevo dentro y, por fin, sentir.
Extraño a mi viejo yo; él parecía entender mejor lo que ahora me consume. Entendí que crecí siendo un tonto y moriré reconociéndolo.
Voy a cambiar más allá de lo que podría imaginar. Llegaré a ser más de lo que fui, aunque termine recostado sufriendo lo que siento hoy.
Respiraré, colapsaré, resucitaré. Y finalmente seré dueño de mis pensamientos profundos.
Porque en su sueño ideal, yo ya no estaré soñando.`
  },
  {
    id: "mar-inconsciente",
    titulo: "Mar Inconsciente",
    contenido: `El miedo se apodera. Floto en un mar inconsciente de sí mismo, ahogándome hasta el fin.
La luz de la luna me señala mientras desciendo lentamente.
Ya no veo nada. Me quedo sin aire, sin nadie que me mire.`
  },
  {
    id: "la-tragedia-del-querer",
    titulo: "La Tragedia del Querer",
    contenido: `A veces me invade la miseria de quien ama demasiado. El amor se me rompe en las manos justo cuando lo alcanzo. Vivo en una metamorfosis perpetua: cambio mi mente y mi ser solo para habitar un segundo en tu mundo. Me pregunto si mi entrega no basta, pues me he desmantelado entero; daría hasta mi alma si el sacrificio lo exigiera. Pero duele la ausencia de reciprocidad, el vacío de esa mínima intención que nunca llega.
Es mi propia tragedia buscar agua en pozos secos. Me rompo para encajar, olvidando que no todos están dispuestos a desmoronarse por amor. Soy consciente de que mis anhelos son irreales y mis expectativas, a veces, hipócritas. Sé que no es culpa de nadie más que de mi propio concepto del querer. Sin embargo, persiste el hambre de esa entrega total, de esa abnegación que Corintios describe. Me cansé de lo que soy y aceptaría cualquier final con tal de que alguien me quiera destruir... de formas bonitas.`
  },
  {
    id: "ignorancia-del-si-mismo",
    titulo: "Ignorancia del Sí Mismo",
    contenido: `Ya no soy quien solía querer. Me encuentro en un mundo ignorante de sí mismo. Soy tan parte de él que ya no me sorprende saber que olvidé lo que es estar solo. Ya no existe la empatía que solía tener; todo desapareció sin que me diera cuenta.
¿Qué se supone que soy ahora? ¿Alguien superior a todo o simplemente la consecuencia de ya no querer ser? Quiero perdurar en mi propio laberinto sin cesar; aprender de lo que fui, soy y seré; saber reconocer mi propio recorrido hasta el final. Pero, vaya, resulta que esto no acaba hasta que fallezca.
Las únicas palabras que encuentro en mi mente ahora son las de mi madre, recordándome orar para encontrar la paz que temo sacar por miedo a nunca poder controlarla. Mi miedo, donde todo ya no tiene sentido. No sé ni siquiera si estoy viviendo o existiendo: primero pienso, luego existo, para volver a pensar. Desplazar todo lo que soy ahora es lo único que me consuela. Busco lo que tengo porque amar es lo único que sé, pero a este punto, ya no sé si sé amarme.`
  },
  {
    id: "la-promesa-de-la-paciencia",
    titulo: "La Promesa de la Paciencia",
    contenido: `Está bien dudar; no todo debe tener una respuesta de inmediato. A veces solo nos toca ser pacientes y esperar lo que necesitamos saber.
Nunca encontrarás lo que buscas, pero Dios te dará todo lo que necesites; Él nunca actuará con odio, sino al contrario: todo lo que sale de Él es parte de su infinito amor hacia nosotros.
La paciencia es la cúspide de todo; es la norma de lo bueno, lo que viene antes de la creación y lo que sostiene al mundo. Lo que yo quiero darte es una parte de mí: la que resiste, la que todo lo perdona y todo lo sana; la que no grita, la que agacha la cabeza y con ternura te mira, con los deseos de luchar por darte lo que muchos no te dan, ya que la paciencia es amor.`
  },
  {
    id: "derrumbe-en-el-hombro",
    titulo: "Derrumbe en el Hombro",
    contenido: `Cuando alguien tema perderme, seré encasillado en mi mundo, dejando que mis miedos puedan botarme hacia todo lo que alguna vez callé. Y en tu hombro despertaré, sintiendo la hermosura de mi miedo derrumbarse y templarme con más fuerza, aferrándose a mi alma para poder perderme lúcidamente en lo que siempre quise ser en tu vida.`
  },
  {
    id: "egoismo-e-ilusion",
    titulo: "Egoísmo e Ilusión",
    contenido: `Extraño a quien fui hace años, a ese yo que se sentía invencible, al que no le importaba la opinión de nadie. Ahora, todo me pesa. No sé bien qué hago con mi vida, finjo saberlo, pero la única certeza que tengo es que en realidad no sé nada.
¿De qué sirve ser poco en un mundo que exige tanto? Sigo enfrentando los mismos miedos de antes, pero sin la misma fuerza, sin la misma convicción. ¿Por qué los sentimientos pesan tanto?
Solo quiero estar bien, dejar de preocuparme por lo que alguien más piensa o siente sobre mí. Pero aquí estoy, luchando por alguien que nunca ha sentido lo mismo, y aun así, me aferro a escribir, como si estas palabras fueran suficiente desahogo.
¿Qué me impide soltar todo este peso, si no soy más que mi propia prisión? Cada paso que doy es un dolor menos, pero solo por unos minutos, hasta que el ciclo vuelve a empezar: buscar amor, desear amor, quedar vacío.
¿Por qué es tan difícil entenderme? Se supone que sé cómo explicar lo que siento, pero no llego a nada. Estoy tan cansado de esto.
Me engaño a mí mismo, pretendiendo no saber la respuesta que ya me espera. No es miedo, es egoísmo, es la falta de amor propio que me mantiene aquí.
Ya lo sé, siempre lo supe. No por nada ignoro lo que escribo, y ella lo entiende, pero prefiere jugar a no verlo. Un juego infantil, uno en el que yo mismo me enredo.
La culpa es mía por volver a caer, por entregarme a algo que nunca fue. No me quiere como yo la quiero, y creo que eso es lo que más duele.
No sé por qué me enamoré de nuevo, si al final, tal vez, todo fue solo una ilusión. Vi amor donde solo había amistad, y nada más.`
  },
  {
    id: "sombra-del-tiempo",
    titulo: "Sombra del Tiempo",
    contenido: `Hoy volví a perder. El tiempo no espera, arrastra mi sombra, borra mis huellas, me deja en la niebla, y no sé si aún soy quien fui.
A veces me confundo, me pierdo en sus ojos, como si fueran un faro o una tormenta, como si la felicidad tuviera su nombre y el vacío empezara donde ella no está.
Me debato entre miedo y deseo, entre el anhelo y la resignación. ¿Perderla sería el final, o fue solo un sueño del que debo despertar?
Hoy no quiero respuestas, solo saber si el día la ha hecho sonreír, si en el rumor de su rutina queda un eco de mí.
Pero una vez más, caí. Porque hay batallas que nunca se ganan, y la suya, sin saberlo, siempre me vence a mí.`
  },
  {
    id: "dulzura-de-tu-recuerdo",
    titulo: "Dulzura de tu Recuerdo",
    contenido: `Hoy imaginé lo feliz que sería poder abrazarla.
Tal vez fue la infinidad de videos que vi,
esas pequeñas ventanas a amores ajenos,
que, sin querer, me llevaron de vuelta a ella.
Indudablemente, solo su imagen llenaba mi mente.
¿Será que estoy tomando las cosas demasiado rápido?
Mi mente no cesa de divagar en su sonrisa,
Dios, cómo adoro verla sonreír.
Es como si la felicidad misma se materializara en ese gesto,
algo tan hermoso en alguien tan hermoso.
Siempre llego a ese punto en el que quisiera llamarla,
solo para decirle: "Ey, ¿qué haces?",
y escuchar su risa nerviosa,
o su pregunta curiosa de por qué la llamé así, de la nada.
No sé, hay algo en su voz que me llena de energía,
como si me diera fuerzas para enfrentar lo que sea,
incluso para meterme en una pelea y salir ganando,
¡ja, ja, ja!
Pensar en ella me alegra el día,
y hoy, como tantas veces,
mi mente vaga en la dulzura de su recuerdo.`
  },
  {
    id: "envidia-de-la-ignorancia",
    titulo: "Envidia de la Ignorancia",
    contenido: `Ya no quiero hablar ni existir, es todo tan pesado y ensordecedor, quiero estar en mi cama solo y sentir que no tengo que salvar a nadie, me paso la vida apoyando e intentando comprender a todo el mundo, pero me cansa de ver que ayudar e incluso escuchar se siente inútil. Todo se vuelve vulgar, deshonesto, mentir por el bien del otro, o simplemente mentir porque no eres lo suficientemente valiente para asumir las consecuencias de tus verdaderos pensamientos, me gusta estar vivo, pero no me gusta "vivir" todos creen conocer el secreto de la vida, pero en realidad solo son ignorantes de su propia fantasía, como si la vida misma tuviera sentido en este plano, pero preocuparme por ellos sería ponerme de los nervios por ser feliz. Sólo les daría la razón cuando digo que les tengo envidia.`
  },
  {
    id: "trabajador-del-vacio",
    titulo: "Trabajador del Vacío",
    contenido: `No sentirme realmente suficiente se volvió un chiste, algo simple y sin sentido. Llevo este sentimiento rencoroso de no sentirme suficiente en mi propio camino, dejándome solitario cada día a merced de la culpa y la lástima, ensordeciéndome hasta creerme que realmente es normal dejarme así como estoy. Ya no quiero, pero ni siento que haya más alternativa; me volveré un trabajador más, sin felicidad ni amistad, encariñándome de lo que no me pertenece, porque amar se volvió mi adicción y mi carencia...`
  },
  {
    id: "desvelo-por-ti",
    titulo: "Desvelo por Ti",
    contenido: `Tienes todo mi amor, ya que muero por ti. Amor, a ti te amo y de ti nace mi amor. Contigo por siempre; por ti, para ti. Me desvelaré y romperé todo de mí, y me armarme de nuevo porque vivo por ti, contigo por siempre.`
  },
  {
    id: "belleza-del-alma",
    titulo: "Belleza del Alma",
    contenido: `Mi alma llora por ti cuando ya no queda nada que buscar; ahora todo mi mundo se reduce a lo que representas. Me observo y me siento alguien horrendo, y aun así, insisto en compartirme contigo, que eres pura belleza de alma y de gesto. No hay nada que no haría por ti: desde entregar mi vida hasta lo más mundano de mi cuerpo. Te lo ofrezco todo para que tu existencia me acompañe hoy, en medio de este sufrimiento; contigo el caos por fin cobra sentido. Es ahí donde entiendo que mi felicidad te pertenece, en ese amor que desborda cuando tu corazón late al lado del mío.
Te amo.`
  },
  {
    id: "el-ultimo-en-quedarse",
    titulo: "El Último en Quedarse",
    contenido: `No fui tu primer amor, y mucho menos el mejor. Hoy solo tienes mi palabra: esa promesa de ser la persona que elija acompañarte en la vida. Quizás sea, entonces, el primero que te ame hasta el llanto, el que se desvanezca contigo al final de los tiempos mientras busca ser exactamente lo que necesitas. Mi amor ha trascendido el razonamiento; ya no razono contigo, porque mi decisión quedó sellada el día en que me elegiste como el tuyo. Te respetaré y amaré mientras me quede aliento, y si la vida se me agota, haré que mi existencia se vuelva un vacío negativo con tal de restarme a mí y sumarte el amor que mereces sentir.`
  },
  {
    id: "cuerda-de-vida",
    titulo: "Cuerda de Vida",
    contenido: `Si mi vida dependiera de una cuerda, mi último rezo sería por ti. Le pediría a Dios que halle a alguien más capaz de amarte tanto como Él me amó a mí, y como yo te amé a ti.`
  },
  {
    id: "el-miedo-a-repetir",
    titulo: "El Miedo a Repetir",
    contenido: `Hoy, con mucho miedo, doy mi corazón. No por mí; yo ya estoy muerto en mí y muero por mi propia culpa. Quiero mi vida contigo; que mi vida para ti sea mi fuerte. Desarrollaré mi experiencia por ti, haciendo que lo dé todo. Pero no olvido el miedo de repetir lo que ya he sufrido por ti. No quiero volver a morir si es que acaso vuelves a jugar con mi vida. Quiero sentir que, si yo muriera, por mí morirías también.`
  },
  {
    id: "rehen-del-odio",
    titulo: "Rehén del Odio",
    contenido: `Ya no quiero morir de amor; siento que ese sentimiento me derrocha y me ignora. Me envuelve en un manto de soledad que me incita a buscar fuera lo que ya tengo cerca. Carezco de amor propio; ojalá pudiera amarme tanto como he amado a otros. Quizás mi búsqueda fue errónea toda la vida: nunca se trató de perseguir el bien, ni mucho menos de huir del mal. No quiero ser rehén del odio profundo que me tengo, ni del poco respeto que me guardo, pero tampoco quiero exhibir mi dolor como si fuera una máscara de egoísmo o un trofeo de resentimiento. Al final, este soy yo y me acepto con mis grietas. Porque entiendo, con dolor y calma, que hoy amo más lo que entrego que lo que realmente soy.`
  },
  {
    id: "celda-a-la-medida",
    titulo: "Celda a la Medida",
    contenido: `Prometo que el día que vuelvas a dejar mi corazón en mis manos, será la última vez que el daño me alcance; porque nunca dejaré que mis sombras, ni las tormentas más crudas de la vida, me alejen de tu lado. Ofrecería mi cuello con tal de asegurar que mañana estaremos bien, conversando como siempre. El peso del amor y del dolor que cargo es tan inmenso que traicionarlo buscando salidas fáciles —como alejarte de mi vida o engañarme con falsos "siempre"— sería un error que me costaría siete días y diez mil noches superar. Porque, al fin y al cabo, entre el amor y el odio solo existe un paso.`
  },
  {
    id: "ausencia-en-el-pensamiento",
    titulo: "Ausencia en el Pensamiento",
    contenido: `Te extraño tanto que sucumbo buscando tu auxilio; un anhelo de esos que roban el sueño y agotan la lucidez en mi cabeza. Me obligas a recobrar la cordura solo tras romper en llanto con el alma. ¿Dónde estás, si no es en este pensamiento que gira sin tregua? Habitas en tu propia ausencia perpetua, dejando huecos que solo tú podrías llenar.
¿Quién diría lo contrario? Te amo tanto que ya no me permito caer en la locura que me genera estar tus brazos, ni en el latido de tu pecho contra el mío que rompe con cualquier miedo, ni tu mirada dulce que me atonta y enciende con esa chispa que me devuelve las ganas de sonreír; es la suavidad de tus labios la que me deja extasiado en la cumbre de mi ansiedad.`
  },
  {
    id: "la-division-del-mundo",
    titulo: "La División del Mundo",
    contenido: `Es difícil hallar a alguien que lo dude, porque ni yo sabría por dónde empezar a cuestionar lo que siento por ti. Has separado el mundo en un espacio donde solo existes tú y mis instintos más primitivos: esos que sostienen mi realidad frente a la locura de una vida sin ti.`
  },
  {
    id: "ideales-chocantes",
    titulo: "Ideales Chocantes",
    contenido: `¿Es acaso mi error intentar razonar contigo? Ya no sé si es real lo que busco a tu lado, o si es mi culpa por no aceptarte tal como eres. Quizás me equivoco al pensar que tus ideales pueden caminar junto a los míos. ¿Es realista creer que todo debería ser distinto? ¿Que debo deconstruir lo que creo y lo que quiero ser solo para encajar con lo tuyo, y que tú hagas lo mismo con lo mío? Ya no sé qué deseo, ni si me quedan fuerzas para resistir. Mis principios chocan contra los tuyos una y otra vez, en un ruido constante que me agota. Ya no sé si tú quieres soportarme, mientras siento que, paso a paso, me derrumbo.`
  },
  {
    id: "sacrificio-de-la-transformacion",
    titulo: "Sacrificio de la Transformación",
    contenido: `¿Es suficiente amar? ¿No es acaso el amor el punto cúspide de la elección y la devoción de uno hacia el otro? Me pregunto dónde termina el querer y dónde vuelve a empezar el amor, si no es más que la destrucción de lo que somos para poder entregarnos. Quizás mi error es pensar que el amor que coincide en un cien por ciento es falso; se siente como una vil mentira de libros y películas. In el mundo realista, el amor siempre te susurra que podrías estar mejor solo, pero la verdad es que siempre exige un sacrificio: ir más allá de lo que podemos dar y de lo que estamos dispuestos a sentir. Abrazamos el dolor como parte de nuestro querer porque sabemos que nos permite cambiar, reestructurar lo que creemos y evolucionar; el verdadero miedo es negarse a esa transformación. Si la felicidad es esto, ya no estoy seguro de si la devoción y la decisión pesan más que el instinto primitivo. Ese que no razona, que solo espera y se adapta. ¿Pero no es acaso lo mismo que uno hace al decidir? ¿O es que tengo que estar ciego de mi propia conciencia para poder ser feliz amando?`
  },
  {
    id: "sentencia-del-final",
    titulo: "Sentencia del Final",
    contenido: `Tal vez soy demasiado joven para pensar en que deseo morir. Me pregunto qué será de la penumbra de mi alma al salir de este cuerpo despojado, descuidado y casi muerto en vida. No guardo la mayor esperanza, pero aun así finjo tener el control de un mundo que me sentencia con un solo final. Como ser de una sola vida, elijo desperdiciarla a mi manera: quiero aferrarme a mis decisiones y responder por ellas, aunque no sea lo único amargo que he sembrado aquí. Sé que Dios no estaría orgulloso de aquello en lo que me he convertido; aun así, Él es mi única redención y mi sola forma de existir. Mi alma pide a gritos morir frente a su presencia, solo para encontrar un poco de consuelo al final de mis días.`
  },
  {
    id: "sospechosos-del-martirio",
    titulo: "Sospechosos del Martirio",
    contenido: `Si intentara ser sincero con mi vida, sé que aún mentiría. No soy aquel que todo lo puede, ni siquiera soy capaz de poder conmigo mismo. Destrozaría mi equilibrio mental con tal de que fueras feliz a mi lado, aunque me cueste la vida afrontar mi propia realidad. Sé que eres perfecta y que yo disto mucho de serlo; entiendo que lo nuestro es una promesa que tiembla ante el miedo de un futuro sin alegría. Presiento que todo sería un caos; tu individualidad me rompe y me hace sentir un extraño en tu vida, esa que deja al alma a la intemperie cuando ya no puede más. Eres el hogar que tanto anhelo, pero ¿qué más puedo esperar? Miento siempre, fingiendo que actúo movido por la confianza, cuando en realidad no recuerdo haber confiado nunca en nadie. Todos son sospechosos del martirio que vivo por amor. Entregarme a ti es mi mayor delito mental: me abro por completo, dándote mi presente y mi futuro, solo para descubrir que nada me basta. Quiero más, quiero ser más y quiero ser más.`
  },
  {
    id: "aprecio-de-la-ausencia",
    titulo: "Aprecio de la Ausencia",
    contenido: `A veces me pregunto: ¿dónde está ella? Esa que sobreentiende los contextos más allá del suyo, que camina con independencia sin rendir cuentas a nadie; esa que te deja perplejo ante la naturalidad de su rumbo y cuya experiencia se nota al hablar, la que realmente te entiende y busca tu felicidad. Es extraño, pero ya no recuerdo a mi gato; juraría que hice todo esto por él, y ahora siento que cuando poseo algo, no me sirve. ¿Qué es realmente el aprecio, si ni siquiera sé valorar lo que hago por otros con las manos vacías? Me conformo con migajas de tiempo y breves lapsos de conversación con esa persona que, se supone, debería escucharme. Me siento ajeno a quien juré elegir. Sé que esto podría ser solo una fase que olvidaré en horas; sin embargo, no apreciar este instante sería un desperdicio de mi vida. Todo se sostiene sobre un piso frágil frente al abismo. Quiero cuidarlo, pero ¿de qué sirve, si entiendo que el aire y la tierra malogran las fisuras de este cristal? ¿Acaso está templado?`
  },
  {
    id: "el-llanto-en-el-ahora",
    titulo: "El Llanto en el Ahora",
    contenido: `¿No echas de menos esa inocencia frente a los golpes del destino? Hablo de esa sensación que te obliga a cuestionar qué hiciste con todo tu tiempo mientras el cansancio y el olvido te alcanzan por la ironía de no querer romperse ante lo nuevo. Amo el pasado pero detesto mi incapacidad de habitar el presente. Si lograra soltar lo que sentí ayer tal vez mi llanto por fin tendría un lugar en el ahora.`
  },
  {
    id: "sin-espacio-donde-caer",
    titulo: "Sin Espacio Donde Caer",
    contenido: `Me cansé de escribir tanto, ya no siento que me ayude, solo es la expresión de mi mente, de algo que ya comprendió hace mucho, que no tiene donde caer.`
  },
  {
    id: "ausencia-en-la-madrugada",
    titulo: "Ausencia en la Madrugada",
    contenido: `Hoy, mi amor, te dedico esta noche de insomnio en un catorce de febrero que parece cualquier otro día. Eres tú quien habita en mi mente mientras mi calma y mi pereza desaparecen para dejarme solo pensando en ti. Me pregunto cómo estarás ahora, qué estarás haciendo y si acaso me piensas con la misma fuerza que yo en esta madrugada. He descubierto que la verdadera razón por la que no puedo dormir es simplemente que me faltas tú. Quisiera estrecharte en este aire cálido para expresarte mis dolores y esa urgencia de que seas tú quien le dé una solución a mi dolor. Aunque parezca solo una noche, paso mi vida entera buscándote en mis pensamientos, preguntándome si llegarás a salvo a casa o si nuestro futuro es una promesa real. A veces dudo si solo soy yo quien construye este mundo donde luchamos por amor, un espacio donde estemos presentes ante los ojos de Dios. No quiero enfrentar mi vida a solas y espero habitar también en tu falta de sueño algún día. Siento que me estoy desgastando, matándome antes de tener el tiempo suficiente para entregarte, finalmente, mi promesa de vida.`
  },
  {
    id: "herida-sin-marcas",
    titulo: "Herida sin Marcas",
    contenido: `Un dolor de cabeza es lo que habita en mí ahora, una herida sin marcas notorias ni un escándalo que me permita pedir auxilio por este dolor. Todo permanece guardado en mi interior, desde ese desorden que nunca termino de ajustar hasta el desconcierto pidiendo un calor cercano mientras el miedo me empuja a alejarme de los problemas. Siento cómo los celos amarran a mi pecho la inseguridad de no ser suficiente para sostener mi propio corazón, rogando que el rencor desatado no tome las riendas de mi habla ni que las palabras que nacen de mi centro terminen doliendo en el alma. Al final soy el único confidente de mi propio choque contra esa pared que debí limpiar hace mucho tiempo.`
  },
  {
    id: "temor-al-desvelo",
    titulo: "Temor al Desvelo",
    contenido: `Mi problema es que el temor me acompaña siempre. Siento que toda mi vida he vivido con miedo. Sé que cometo errores al contarte mis cosas; a veces las digo sin pensar, simplemente porque me nacen. La realidad es que ahora no tengo a nadie más que a ti, y me siento incapaz de detener este flujo constante de pensamientos. Me siento torpe a cada instante por este miedo que no puedo abandonar, ese que siempre me empuja a mostrar mis lados más vulnerables. Y al final, me invade la sensación de que, al mostrarme así, solo consigo que te alejes más de mí.`
  },
  {
    id: "el-destino-sin-cura",
    titulo: "El Destino sin Cura",
    contenido: `Creo que olvidé como fue el día que desperté y sabía que iba a morir. Hay cosas que cuando las pienso, no son para tanto, que sería cosas mías y que estaba jugando demasiado con la imaginación, la sospechas eran algo que duraban solo unos segundos, los problemas más grandes que tenía era si la persona que me gustaba iría al colegio hoy, había mucha inocencia aún así, quien iba pensar que durante todo es que tiempo estaba luchando por cosas que me arracarian las ganas de respirar por momentos, la muerte. Yo de muy pequeño entendía que era morir, pero más bien, nunca entendí el miedo de eso, siempre pensé que era algo más sencillo que aceptar el destino que nos dieron, que poco mente tenía de niño, me doy cuenta que solo era una persona que no podia ver más allá de sus pies, que pena la mía y la de todos mis cercanos de ese momentos, despegarme emocionalmente de ellos, en las veces que tocaba ser empático, dar un abrazo y escuchar activamente a alguien, términos que en mi vida hubiera pensado reconocer, es raro, de niño no le tenía a la muerte. Igualmente no sabría que en mi presente estaba cargando los pasos de una enfermedad que me superaba por mucho, y no saber de ella, no me preocupaba, es raro por ahora caigo en cuenta que realmente siempre fui consciente, pero nunca quise afrontarlo, pena me dieron mis padres y mi hermana, al verme recorrer un mundo de infinitos exámenes para volver a un punto de partida desalentador cada vez, pasar casi 5 años de tu vida buscando a algo que me poniendo al filo de la muerte, era algo que reconocía, pero más bien no le temia. La enfermedad sin cura, la que me haria estar llevando una vida un tanto diferente a los demás, que me dio el cargo de Dios al instruirme a una vida de este estilo, y ahora no la siento, se volvió parte de mí, al final.`
  },
  {
    id: "la-renuncia-al-disenador",
    titulo: "La Renuncia al Diseñador",
    contenido: `Materia en manos ajenas ¿Estoy realmente roto? A veces me pregunto si lo que habito es un daño interno real o simplemente un deseo fugaz de sentirme tan mal que me obligue a recapacitar. Me cuestiono si todo lo que hago y lo que haré tendrá algún sentido al final del camino. Cargo en mi conciencia una paradoja constante. Me pierdo intentando saber qué paso dar mientras saboteo mi propio avance. Calcino mis pensamientos hasta el agotamiento, atragantándome en una cúspide de ideas que nunca terminan de nacer. Desearía entender mi rol y ser capaz de soltar aquello que me detiene en esta carrera sin sentido que llamo vida. Sin embargo, el anhelo es otro: deseo morir por alguien. La renuncia al arquitecto Me pregunto si mi mundo fue construido para el beneficio de otra persona. No soy capaz de encontrar, por mi propia cuenta, la convicción de querer vivir para mí. No quiero hacerlo, no me agrada, no siento que el esfuerzo valga la pena si el fin soy yo mismo. Quiero que alguien más tome mi vida y le dé el molde que yo no sé encontrar. Deseo ser la masa para aquel que quiera tener a alguien como yo. Quiero que me horneen hasta transformarme en lo que sea que necesiten. Prefiero ser el resultado del deseo de otro que el arquitecto de mi propio vacío. Anhelo ser alguien, pero solo si puedo ser alguien para alguien más. A veces, la única forma de no quemarse es dejar que sea otro quien controle el fuego del horno...`
  },
  {
    id: "la-caducidad-del-milagro",
    titulo: "La Caducidad del Milagro",
    contenido: `Ignoré el llanto de mamá. Me encerré en la ignorancia para no naufragar en su orilla; sostener el silencio fue mi única forma de seguir en pie. Mi sangre se sacude: ya no reconoce el cuerpo que habita tras el peso de la sentencia. Para mí, morir es un indulto; para ella, un estigma. Es la ironía del hijo: ser un milagro con fecha de caducidad. Si me voy, que alguien le diga que yo ya solté la cuerda que ella todavía aprieta hasta sangrar. No me mató la enfermedad, me mató su incapacidad de dejarme ir.`
  },
  {
    id: "prisionero-eterno",
    titulo: "Prisionero Eterno",
    contenido: `¿De quién más podría estar enamorado? Si yo me pierdo con solo pensarte. La tensión de tu mirada es la que me afloja por las noches; ¿cómo un rostro tan hermoso como el tuyo podría no derretirme el corazón, si con tan solo olerte estoy a tu disposición, querida? Soy tu prisionero eterno y cumplo mi condena con la felicidad de un niño que descubre el mundo de a poco, tan emocionado por lo deslumbrante de cada día, deslumbrándose con las maravillas que yacen en lo poco que mira. Entonces, ¿de quién más estaría enamorado, si solo tu pensamiento me causa la locura extraña de ver al mundo por primera vez?`
  },
  {
    id: "rasgar-la-piel",
    titulo: "Rasgar la Piel",
    contenido: `A veces me desconozco. Empiezo a rasgarme esta piel que me sobra, a mutilar mi propia anchura para forzar mi entrada en un sitio donde ni siquiera sé si quepo. Me estoy volviendo pequeño para habitar tu estrechez.`
  },
  {
    id: "la-jaula-del-viento",
    titulo: "La Jaula del Viento",
    contenido: `Si mañana elijo ayunar de ti para saciar tu sed de aire; moriré entendiendo que mi único error fue no haberte construido una jaula más hermosa.`
  },
  {
    id: "polvo-que-respira",
    titulo: "Polvo que Respira",
    contenido: `Quiero explotar. Dejar las vísceras en la calle y arrastrar mi sangre hasta que el suelo me absorba; ser esa mancha oscura y seca bajo los pies de quien pisa mi mundo. Dios: esta presión es ridícula, pero me está moliendo los huesos.
No busco el cielo; solo quiero ser polvo que respira sin saberlo. Me desangro rápido. Pues soy sangre secandose.`
  },
  {
    id: "el-pacto-de-la-esclavitud",
    titulo: "El Pacto de la Esclavitud",
    contenido: `Amo por decisión, no por instinto. Elijo el naufragio de quedarme cuando eres tú quien me quiere ahogar; prefiero mi alma en ruinas si eso cimenta tu resurgimiento. Este es el pacto de mis manos amarradas al abismo, mi condena de esclavitud firmada cada día. Porque del amor como, pero de él también me muero. No busco libertad en tus brazos, sino la celda a mi medida. Por eso, mi único ruego es este: que tú también estés dispuesta a no salvarte de mí mismo.`
  },
  {
    id: "carne-en-el-vacio",
    titulo: "Carne en el Vacío",
    contenido: `No es que me haya dado cuenta recién; mi error siempre fue darte mi conciencia paralizada, esa que deja colgando mi carne hasta que me desangre.`
  },
  {
    id: "el-amargor-de-la-promesa",
    titulo: "El Amargor de la Promesa",
    contenido: `Me dejas con el amargor de una fruta que, de tan dulce que prometía ser, ahora escuece.`
  },
  {
    id: "calor-de-girasol",
    titulo: "Calor de Girasol",
    contenido: `Tienes esos girasoles que roban mis ideas en las noches, mientras mi alma se rompe para desquitar el llanto de ese niño detrás de la pantalla. Tan humillante en ese calor falso, buscando sentir el latido en tu pecho; ese que, al final, decía la verdad de todo.`
  },
  {
    id: "pecado-en-la-ausencia",
    titulo: "Pecado en la Ausencia",
    contenido: `Yo recuerdo haber pecado de amar más; haciendo ciego ante tu ausencia y ante esa ignorancia que das por hecho que es de bien.`
  },
  {
    id: "el-mundo-de-los-ojos",
    titulo: "El Mundo de los Ojos",
    contenido: `Soy consciente tan consciente de mi ser que prefiero la ignorancia de como la luz entra por mis ojos. Que en vez de dejarme ciego me abre un mundo más grande del que puedo alguna vez entender.`
  },
  {
    id: "envenenado-de-amor",
    titulo: "Envenenado de Amor",
    contenido: `Abomino el aire que no nace de su boca. Mis pulmones, aun cansados, lucharían por deshacer mi cuerpo en su piel. Vivo por su culpa: por la hostilidad de mi pecho dispuesto a morir envenenado si ella lo ordena. No existe acto de fuerza más grande que esta voluntad de demoler cada centímetro de mi ser solo para estar, por fin, solo el espacio que ella ocupa.`
  },
  {
    id: "el-puente-del-cimiento",
    titulo: "El Puente del Cimiento",
    contenido: `Y soy solamente un puente para conseguir el éxito, el que deja siendo piedra quebrada para calzar cimiento ajeno.`
  },
  {
    id: "la-complicidad-del-pelaje",
    titulo: "La Complicidad del Pelaje",
    contenido: `Carece de pensamiento; es solo instinto y sinapsis digestiva. Yo administro la ración y ella tolera mi presencia para no morir. Funcionamos por la ausencia de pactos: yo cambio alimento por el simulacro de la compañía. No hay secreto, no hay nada que entender debajo de su pelaje. Es un trato mundano. Mi alma incondicional es un residuo que ella no elige, pero acepta. Yo tomo lo que supongo es amor y lo proceso como una creencia más, un mecanismo para soportar el vacío. Envidio su mundo: termina exactamente donde empieza su piel.`
  },
  {
    id: "canibalismo-del-nombre",
    titulo: "Canibalismo del Nombre",
    contenido: `Extraño la sensación que reduce al hombre a un niño varado en la camilla, cercado por desastres corporales en su propio camino al desangramiento. Mi muerte no sería nada sin haber frotado mi resto contra tus manos sucias; prefiero perecer en tu piel escamada, allí donde no tengo refugio pero tampoco salida. ¿A dónde iría mi nombre si no lo escriben tus paredes? Deseo y abomino este corte: abrir mi piel cocida para alimentarme de mí mismo. Es un canibalismo sin sentido. Es lo único que queda.`
  },
  {
    id: "votos-de-corneas-sueltas",
    titulo: "Votos de Córneas Sueltas",
    contenido: `No fue amor: fue mi arrogancia proyectada en tu carne. Tomé votos de córneas sueltas para que mis ojos decidieran qué parte de tu pie diseccionar primero. Soy la víctima de mis propios aciertos al pecho. No hubo mejor soga que mi mente administrando el desgarro de tu cuerpo. Mis manos manchadas solo buscaban el reflejo que yo quería ver. La verdad es que no te amaba. Amaba tenerte arrastrada a este desmembramiento al que llamo "te quiero".`
  },
  {
    id: "la-barrera-del-hablar",
    titulo: "La Barrera del Hablar",
    contenido: `Qué franqueza hay en tu hablar, como si tus labios rompieran la barrera delgada entre la escucha y mis pensamientos, oscureciendo más lo poco de cordura que me quedaba, rebanando mis conceptos e ilusiones de tu alma sin gracia. Dándome el alivio de sentirme cómodo en esta soledad, en donde termino oyendo lo más cínico como un día libre en el trabajo; ya me doy cuenta de que no vale la pena.`
  },
  {
    id: "eco-de-mi-voz",
    titulo: "Eco de mi Voz",
    contenido: `Me encanta la idea: tener el goce de mi cuerpo cálido por la emoción de tener cerca a alguien, aunque no estuviera. Esa nostalgia que me encamina a tratarme peor por no conservar lo bonito que tuve en mis brazos; porque mi cuerpo rasguñado aún quiere intentar saborear un poco más el calor que generaba el roce de las cuchillas en mi piel. Pobre mente, que lo único que piensa es en cómo hacer feliz a otro, y qué tragedia la mía de solo saber amar a otro.

Y aunque en redundancias muera, quiero jurar que puedo estar bien solamente con el eco de mi voz, tarareando un intento de música alegre que da pena, con el suspiro de mi garganta dolida de tanto esfuerzo. Solo soy yo escribiendo algo sin sentido, no sintiendo nada —si es acaso que lo que tengo ahora se llame sentir—, pensando en partes de mi cuerpo como un medio más de mi irreparable sed de descanso. Sé que, igual, lo que escribo no tiene nada que ver, porque cualquiera podría estar llevando mejor la historia de mi mente. Pero ¿cómo describiría con un objeto mis ideas entre sentirme en nada o pensar en cosas que me hacen sentir algo?`
  },
  {
    id: "que-mas-da",
    titulo: "¿Qué Más Da?",
    contenido: `¿Qué más da si estoy muerto?
Si con mi sangre descompuesta puedo amar,
si con mi carne picada puedo dar de comer,
si desde mi agonía puedo salvar.
¿Qué más da?
Todo reside en ver lo abstracto de forma cuadrada.
El dolor de mis manos y el frío de mis pies bastan para matar.
¿Qué más da cortarme en partes para repartirme en un todo?
Mis amores son sinceros.
Aunque me sienta vinagre,
alguien sabrá cómo volverme vino añejo.`
  },
  {
    id: "brasa-del-infierno",
    titulo: "Brasa del Infierno",
    contenido: `Sin corazón he nacido;
ha sobrado el calcinante fuego de la brasa del infierno,
que acordó el dulce detalle de ser mi compañero.`
  },
  {
    id: "medula-del-desvelo",
    titulo: "Médula del Desvelo",
    contenido: `¿Y qué es de mí, si de médula quiero sentir lo poco y la gran pequeñez que fue mi desvelo para la niña de mis ojos? La que quisiera haber asesinado con las mismas latas de miseria guardadas por años. La misma comida insípida que agradezco por tener, aunque de hambre me muero hoy y mañana quizás de pan me ahogaré.`
  },
  {
    id: "efimera-chispa",
    titulo: "Efímera Chispa",
    contenido: `Qué bonito que cierro los ojos
y en la absoluta oscuridad pueda sentir
esa efímera chispa que recorre mi cerebro,
convulsionándome por nada.

Y sin fuerzas por gastar,
siento la fluidez de mi esperanza,
que piensa que vive en la arteria más pequeña de mi corazón,
moviendo cada músculo por un propósito tan simple
como amarte.`
  }
];

export const poemas: Poema[] = poemasRaw.map((p, index) => ({
  ...p,
  color: colorPalette[index % colorPalette.length]
}));
