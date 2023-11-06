"use strict";(self.webpackChunkjava_docs=self.webpackChunkjava_docs||[]).push([[5066],{3905:(e,n,a)=>{a.d(n,{Zo:()=>d,kt:()=>v});var r=a(7294);function t(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function i(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?i(Object(a),!0).forEach((function(n){t(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function s(e,n){if(null==e)return{};var a,r,t=function(e,n){if(null==e)return{};var a,r,t={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||(t[a]=e[a]);return t}(e,n);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(t[a]=e[a])}return t}var u=r.createContext({}),o=function(e){var n=r.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):l(l({},n),e)),a},d=function(e){var n=o(e.components);return r.createElement(u.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var a=e.components,t=e.mdxType,i=e.originalType,u=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),p=o(a),g=t,v=p["".concat(u,".").concat(g)]||p[g]||m[g]||i;return a?r.createElement(v,l(l({ref:n},d),{},{components:a})):r.createElement(v,l({ref:n},d))}));function v(e,n){var a=arguments,t=n&&n.mdxType;if("string"==typeof e||t){var i=a.length,l=new Array(i);l[0]=g;var s={};for(var u in n)hasOwnProperty.call(n,u)&&(s[u]=n[u]);s.originalType=e,s[p]="string"==typeof e?e:t,l[1]=s;for(var o=2;o<i;o++)l[o]=a[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},2240:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var r=a(7462),t=(a(7294),a(3905));const i={title:"Musterklausur",description:"",sidebar_position:20,tags:[]},l=void 0,s={unversionedId:"additional-material/daniel-java2/sample-exam",id:"additional-material/daniel-java2/sample-exam",title:"Musterklausur",description:"",source:"@site/docs/additional-material/daniel-java2/sample-exam.md",sourceDirName:"additional-material/daniel-java2",slug:"/additional-material/daniel-java2/sample-exam",permalink:"/java-docs/preview-refs/pull/1/merge/additional-material/daniel-java2/sample-exam",draft:!1,editUrl:"https://github.com/jappuccini/java-docs/tree/main/docs/additional-material/daniel-java2/sample-exam.md",tags:[],version:"current",sidebarPosition:20,frontMatter:{title:"Musterklausur",description:"",sidebar_position:20,tags:[]},sidebar:"additionalMaterialSidebar",previous:{title:"Daniel (Programmierung 2)",permalink:"/java-docs/preview-refs/pull/1/merge/additional-material/daniel-java2/"},next:{title:"Cheatsheet",permalink:"/java-docs/preview-refs/pull/1/merge/additional-material/daniel-java2/cheatsheet"}},u={},o=[{value:"Hinweise zur Klausur",id:"hinweise-zur-klausur",level:2},{value:"Aufgabe 1 (14 Punkte)",id:"aufgabe-1-14-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm",level:3},{value:"Hinweise zur Klasse SuperLeagueTest",id:"hinweise-zur-klasse-superleaguetest",level:3},{value:"Hinweis zur Klasse SuperLeague",id:"hinweis-zur-klasse-superleague",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung",level:3},{value:"Aufgabe 2 (16 Punkte)",id:"aufgabe-2-16-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-1",level:3},{value:"Hinweise zur Klasse SuperLeague&lt;T extends SuperHuman&gt;",id:"hinweise-zur-klasse-superleaguet-extends-superhuman",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-1",level:3},{value:"Aufgabe 3 (22 Punkte)",id:"aufgabe-3-22-punkte",level:2},{value:"Klassendiagramm",id:"klassendiagramm-2",level:3},{value:"Hinweise zur Klasse SingleQueries",id:"hinweise-zur-klasse-singlequeries",level:3},{value:"Musterl\xf6sung",id:"musterl\xf6sung-2",level:3}],d={toc:o},p="wrapper";function m(e){let{components:n,...a}=e;return(0,t.kt)(p,(0,r.Z)({},d,a,{components:n,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"hinweise-zur-klausur"},"Hinweise zur Klausur"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die in dieser Klausur verwendeten Personenbezeichnungen beziehen sich \u2013 sofern\nnicht anders kenntlich gemacht \u2013 auf alle Geschlechter"),(0,t.kt)("li",{parentName:"ul"},"Es kann davon ausgegangen werden, dass s\xe4mtliche Klassen entsprechende\nImplementierungen der Object-Methoden besitzen"),(0,t.kt)("li",{parentName:"ul"},"Der Stereotyp ",(0,t.kt)("inlineCode",{parentName:"li"},"<<record>>")," impliziert, dass die Datenklasse einen\nentsprechenden Konstruktor, Getter zu allen Attributen sowie entsprechende\nImplementierungen der Object-Methoden besitzt"),(0,t.kt)("li",{parentName:"ul"},"Der Stereotyp ",(0,t.kt)("inlineCode",{parentName:"li"},"<<enumeration>>")," impliziert, dass die Aufz\xe4hlung einen\npassenden, privaten Konstruktor sowie gegebenenfalls passende Getter f\xfcr alle\nAttribute besitzt"),(0,t.kt)("li",{parentName:"ul"},"Pakete und Klassenimporte m\xfcssen nicht angegeben werden"),(0,t.kt)("li",{parentName:"ul"},"F\xfcr die Konsolenausgabe kann das K\xfcrzel ",(0,t.kt)("em",{parentName:"li"},"sysout")," verwendet werden"),(0,t.kt)("li",{parentName:"ul"},"Methoden- und Attributsbezeichner d\xfcrfen sinnvoll gek\xfcrzt geschrieben werden\n(Beispiel ",(0,t.kt)("em",{parentName:"li"},"testGMPSH()")," statt ",(0,t.kt)("em",{parentName:"li"},"testGetMostPowerfulSuperHuman()"),")")),(0,t.kt)("h2",{id:"aufgabe-1-14-punkte"},"Aufgabe 1 (14 Punkte)"),(0,t.kt)("p",null,"Erstelle die JUnit-5-Testklasse ",(0,t.kt)("inlineCode",{parentName:"p"},"SuperLeagueTest")," anhand des abgebildeten\nKlassendiagramms."),(0,t.kt)("h3",{id:"klassendiagramm"},"Klassendiagramm"),(0,t.kt)("mermaid",{value:"classDiagram\n    SuperHuman <|-- Villain\n    SuperHuman <|-- Hero\n    SuperHuman o-- Universe\n    SuperLeague~T extends SuperHuman~ o-- Universe\n    SuperLeagueTest o-- Hero\n    SuperLeagueTest o-- SuperLeague\n\n    class SuperHuman {\n        <<abstract>>\n        -name String\n        -universe Universe\n        -power int\n        +SuperHuman(name String, universe Universe, power int)\n        +name() String\n        +universe() Universe\n        +power() int\n    }\n\n    class Villain {\n        +Villain(name String, universe Universe, power int)\n    }\n\n    class Hero {\n        +Hero(name String, universe Universe, power int)\n    }\n\n    class Universe {\n        <<enumeration>>\n        MARVEL\n        DC\n    }\n\n    class SuperLeague~T extends SuperHuman~ {\n        <<record>>\n        -name String\n        -universe Universe\n        -members Map~T&#44&#160Boolean~\n        +addSuperHuman(t T) void\n        +getMostPowerfulSuperHuman() Optional~T~\n        +getAllAvailableSuperHumans() List~T~\n        +sendSuperHumanOnMission(t T) void\n    }\n\n    class SuperLeagueTest {\n        -avengers SuperLeague~Hero~\n        -superman Hero\n        -ironman Hero\n        -spiderman Hero\n        +setUp() void\n        +testAddSuperHuman() void\n        +testGetAllAvailableSuperHumans() void\n        +testGetMostPowerfulSuperHuman() void\n    }"}),(0,t.kt)("h3",{id:"hinweise-zur-klasse-superleaguetest"},"Hinweise zur Klasse SuperLeagueTest"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Lebenszyklus-Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void setUp()")," soll das nachfolgende Testszenario\naufbauen:",(0,t.kt)("ul",{parentName:"li"},(0,t.kt)("li",{parentName:"ul"},"Es sollen die Superhelden Superman (DC, St\xe4rke 10), Iron Man (MARVEL, 7) und\nSpider-Man (MARVEL, 8) erstellt und den entsprechenden Attributen zugewiesen\nwerden"),(0,t.kt)("li",{parentName:"ul"},"Es soll eine MARVEL-Superheldenliga mit dem Namen ",(0,t.kt)("em",{parentName:"li"},"Avengers")," erstellt und\ndem entsprechenden Attribut zugewiesen werden"),(0,t.kt)("li",{parentName:"ul"},"Die Superhelden Iron Man und Spider-Man sollen den Avengers als verf\xfcgbaren\nSuperhelden hinzugef\xfcgt werden"),(0,t.kt)("li",{parentName:"ul"},"Der Superheld mit dem Namen Spider-Man soll auf eine Mission geschickt\nwerden"))),(0,t.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,t.kt)("inlineCode",{parentName:"li"},"void testAddSuperHuman()")," soll pr\xfcfen, ob beim Aufruf der\nMethode ",(0,t.kt)("inlineCode",{parentName:"li"},"void addSuperHuman(t: T)")," auf das Attribut ",(0,t.kt)("inlineCode",{parentName:"li"},"avengers")," mit dem Wert\n",(0,t.kt)("inlineCode",{parentName:"li"},"superman")," die Ausnahme ",(0,t.kt)("inlineCode",{parentName:"li"},"WrongUniverseException")," ausgel\xf6st wird"),(0,t.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,t.kt)("inlineCode",{parentName:"li"},"void testGetAllAvailableSuperHumans()")," soll pr\xfcfen, ob beim\nAufruf der Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"List<T> getAllAvailableSuperHumans()")," auf das Attribut\n",(0,t.kt)("inlineCode",{parentName:"li"},"avengers")," eine Liste der Gr\xf6\xdfe 1 zur\xfcckgegeben wird"),(0,t.kt)("li",{parentName:"ul"},"Die Testmethode ",(0,t.kt)("inlineCode",{parentName:"li"},"void testGetMostPowerfulSuperHuman()")," soll pr\xfcfen, ob beim\nAufruf der Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"Optional<T> getMostPowerfulSuperHuman()")," auf das Attribut\n",(0,t.kt)("inlineCode",{parentName:"li"},"avengers")," der Superheld Spider-Man als Optional zur\xfcckgegeben wird")),(0,t.kt)("h3",{id:"hinweis-zur-klasse-superleague"},"Hinweis zur Klasse SuperLeague"),(0,t.kt)("p",null,"Die Methode ",(0,t.kt)("inlineCode",{parentName:"p"},"void addSuperHuman(t: T)")," kann die Ausnahme\n",(0,t.kt)("inlineCode",{parentName:"p"},"WrongUniverseException")," ausl\xf6sen."),(0,t.kt)("h3",{id:"musterl\xf6sung"},"Musterl\xf6sung"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SuperLeagueTest.java" showLineNumbers',title:'"SuperLeagueTest.java"',showLineNumbers:!0},'public class SuperLeagueTest { // 0,5\n\n  private SuperLeague<Hero> avengers; // 0,25\n  private Hero superman; // 0,25\n  private Hero ironman; // 0,25\n  private Hero spiderman; // 0,25\n\n  @BeforeEach // 0,25\n  void setUp() throws WrongUniverseException { // 0,75\n    superman = new Hero("Superman", Universe.DC, 10); // 1\n    ironman = new Hero("Iron Man", Universe.MARVEL, 7); // 1\n    spiderman = new Hero("Spider-Man", Universe.MARVEL, 8); // 1\n    avengers = new SuperLeague<>("Avengers", Universe.MARVEL, new HashMap<>()); // 1\n    avengers.addSuperHuman(ironman); // 1\n    avengers.addSuperHuman(spiderman); // 1\n    avengers.sendSuperHumanOnMission(spiderman); // 0,5\n  }\n\n  @Test // 0,25\n  void testAddSuperHuman() { // 0,25\n    assertThrows(WrongUniverseException.class, () -> avengers.addSuperHuman(superman)); // 1\n  }\n\n  @Test // 0,25\n  void testGetAllAvailableSuperHumans() { // 0,25\n    assertEquals(1, avengers.getAllAvailableSuperHumans().size()); // 1\n  }\n\n  @Test // 0,25\n  void testGetMostPowerfulSuperHuman() { // 0,25\n    assertEquals(spiderman, avengers.getMostPowerfulSuperHuman().get()); // 1,5\n  }\n\n}\n')),(0,t.kt)("h2",{id:"aufgabe-2-16-punkte"},"Aufgabe 2 (16 Punkte)"),(0,t.kt)("p",null,"Erstelle die Klasse ",(0,t.kt)("inlineCode",{parentName:"p"},"SuperLeague<T extends SuperHuman>")," anhand des abgebildeten\nKlassendiagrams."),(0,t.kt)("h3",{id:"klassendiagramm-1"},"Klassendiagramm"),(0,t.kt)("mermaid",{value:"classDiagram\n    SuperHuman <|-- Villain\n    SuperHuman <|-- Hero\n    SuperHuman o-- Universe\n    SuperLeague~T extends SuperHuman~ o-- Universe\n\n    class SuperHuman {\n        <<abstract>>\n        -name String\n        -universe Universe\n        -power int\n        +SuperHuman(name String, universe Universe, power int)\n        +name() String\n        +universe() Universe\n        +power() int\n    }\n\n    class Villain {\n        +Villain(name String, universe Universe, power int)\n    }\n\n    class Hero {\n        +Hero(name String, universe Universe, power int)\n    }\n\n    class Universe {\n        <<enumeration>>\n        MARVEL\n        DC\n    }\n\n    class SuperLeague~T extends SuperHuman~ {\n        <<record>>\n        -name String\n        -universe Universe\n        -members Map~T&#44&#160Boolean~\n        +addSuperHuman(t T) void\n        +getMostPowerfulSuperHuman() Optional~T~\n        +getAllAvailableSuperHumans() List~T~\n        +sendSuperHumanOnMission(t T) void\n    }"}),(0,t.kt)("h3",{id:"hinweise-zur-klasse-superleaguet-extends-superhuman"},"Hinweise zur Klasse SuperLeague","<","T extends SuperHuman",">"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Der Assoziativspeicher ",(0,t.kt)("inlineCode",{parentName:"li"},"members")," beinhaltet als Schl\xfcssel alle \xdcbermenschen\nder Liga sowie als Wert deren Verf\xfcgbarkeit (verf\xfcgbar: ",(0,t.kt)("inlineCode",{parentName:"li"},"true"),", nicht\nverf\xfcgbar: ",(0,t.kt)("inlineCode",{parentName:"li"},"false"),")"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"Optional<T> getMostPowerfulSuperHuman()")," soll den st\xe4rksten\n\xdcbermenschen der Liga als Optional zur\xfcckgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void addSuperHuman(t: T)")," soll der Liga den eingehenden\n\xdcbermenschen als verf\xfcgbares Mitglied hinzuf\xfcgen. F\xfcr den Fall, dass das\nUniversum des eingehenden \xdcbermenschen nicht dem Universum der Liga\nentspricht, soll die Ausnahme ",(0,t.kt)("inlineCode",{parentName:"li"},"WrongUniverseException")," ausgel\xf6st werden"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"List<T> getAllAvailableSuperHumans()")," soll alle verf\xfcgbaren\n\xdcbermenschen der Liga als Liste zur\xfcckgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void sendSuperHumanOnMission(t: T)")," soll die Verf\xfcgbarkeit des\neingehenden \xdcbermenschen auf nicht verf\xfcgbar setzen")),(0,t.kt)("h3",{id:"musterl\xf6sung-1"},"Musterl\xf6sung"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SuperLeage.java" showLineNumbers',title:'"SuperLeage.java"',showLineNumbers:!0},"public record SuperLeague<T extends SuperHuman>\n  (String name, Universe universe, Map<T, Boolean> members) { // 1\n\n  public Optional<T> getMostPowerfulSuperHuman() { // 0,5\n    T mostPowerfulSuperHuman = null; // 0,5\n    int power = 0; // 0,5\n    for (T t : members.keySet()) { // 1\n      if (t.power() > power) { // 0,5\n        power = t.power(); // 0,5\n        mostPowerfulSuperHuman = t; // 0,5\n      }\n    }\n    return Optional.ofNullable(mostPowerfulSuperHuman); // 1\n  }\n\n  public void addSuperHuman(T t) throws WrongUniverseException { // 1\n    if (!t.universe().equals(universe)) { // 1\n      throw new WrongUniverseException(); // 1\n    }\n\n    members.put(t, true); // 1\n  }\n\n  public List<T> getAllAvailableSuperHumans() { // 0,5\n    List<T> allAvailableSuperHumans = new ArrayList<>(); // 0,5\n    for (Entry<T, Boolean> entry : members.entrySet()) { // 1\n      if (entry.getValue().equals(true)) { // 1\n        allAvailableSuperHumans.add(entry.getKey()); // 1\n      }\n    }\n    return allAvailableSuperHumans; // 0,5\n  }\n\n  public void sendSuperHumanOnMission(T t) { // 0,5\n    members.put(t, false); // 1\n  }\n\n}\n")),(0,t.kt)("h2",{id:"aufgabe-3-22-punkte"},"Aufgabe 3 (22 Punkte)"),(0,t.kt)("p",null,"Erstelle die Klasse ",(0,t.kt)("inlineCode",{parentName:"p"},"SingleQueries")," anhand des abgebildeten Klassendiagramms."),(0,t.kt)("h3",{id:"klassendiagramm-2"},"Klassendiagramm"),(0,t.kt)("mermaid",{value:"classDiagram\n    Single o-- Artist\n    Artist o-- Country\n    SingleQueries o-- Single\n\n    class Single {\n        <<record>>\n        -name String\n        -artist Artist\n        -salesInMillions int\n        -publishingYear String\n    }\n\n    class Artist {\n        <<record>>\n        -name String\n        -country Country\n        -birthdate LocalDate\n        -isAlive boolean\n    }\n\n    class Country {\n        <<enumeration>>\n        BRB\n        CHN\n        FRA\n        GBR\n        ITA\n        PRI\n        USA\n    }\n\n    class SingleQueries {\n        <<record>>\n        -singles List~Single~\n        +printAllSinglesWithMoreThan25MillionSalesPerCountry() void\n        +printAverageBirthYearOfAllDeceasedArtists() void\n        +isAnySingleFromChinaWithMoreThan10MillionSales() boolean\n        +getTop3SinglesOfThisCenturyBySalesInMillions() List~String~\n        +getAllSinglesFromEdSheeran() List~Single~\n    }"}),(0,t.kt)("h3",{id:"hinweise-zur-klasse-singlequeries"},"Hinweise zur Klasse SingleQueries"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void printAllSinglesWithMoreThan25MillionSalesPerCountry()")," soll\nalle Singles, die sich mehr als 25 Millionen mal verkauft haben, gruppiert\nnach dem Land in der Form ",(0,t.kt)("em",{parentName:"li"},"[Land","]",": [[Single","]",", [Single","]",",...","]")," ausgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"void printAverageBirthYearOfAllDeceasedArtists()")," soll das\ndurchschnittliche Geburtsjahr aller verstorbenen K\xfcnstler bzw. aller\nverstorbenen K\xfcnstlerinnen ausgeben. F\xfcr den Fall, dass es keinen verstorbenen\nK\xfcnstler bzw. keine verstorbene K\xfcnstlerin gibt, soll der Wert -1 ausgegeben\nwerden"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"boolean isAnySingleFromChinaWithMoreThan10MillionSales()")," soll\nzur\xfcckgeben, ob es eine Single eines K\xfcnstlers bzw. einer K\xfcnstlerin aus China\ngibt, welches sich mehr als 10 Millionen Mal verkauft hat"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"List<String> getTop3SinglesOfThisCenturyBySalesInMillions()")," soll\ndie 3 am h\xe4ufigsten verkauften Singles des jetzigen Jahrtausends sortiert nach\nder Anzahl Verk\xe4ufe in Millionen in der Form ",(0,t.kt)("em",{parentName:"li"},"[Name der Single","]",": [Name des\nK\xfcnstlers bzw. Name der K\xfcnstlerin","]",", [Verk\xe4ufe in Millionen","]"," Millionen"),"\nzur\xfcckgeben"),(0,t.kt)("li",{parentName:"ul"},"Die Methode ",(0,t.kt)("inlineCode",{parentName:"li"},"List<Single> getAllSinglesFromEdSheeran()")," soll alle Singles des\nK\xfcnstlers Ed Sheeran (Land: Gro\xdfbritannien, Geburtstag: 17.02.1991, Status:\nlebendig) zur\xfcckgeben")),(0,t.kt)("h3",{id:"musterl\xf6sung-2"},"Musterl\xf6sung"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-java",metastring:'title="SingleQueries" showLineNumbers',title:'"SingleQueries"',showLineNumbers:!0},'public record SingleQueries(List<Single> singles) { // 1\n\n  public void a() { // 0,5\n    Map<Country, List<Single>> tmp = singles.stream() // 1\n      .filter(a -> a.salesInMillions() > 25) // 0,5\n      .collect(Collectors.groupingBy(a -> a.artist().country())); // 1\n\n    tmp.forEach((c, sl) -> System.out.println(c + ": " + sl); // 1\n    }\n  }\n\n  public void b() { // 0,5\n    OptionalDouble tmp = singles.stream() // 1\n      .map(a -> a.artist()) // 0,5\n      .distinct() // 0,5\n      .filter(a -> !a.isAlive()) // 0,5\n      .mapToInt(a -> a.birthdate().getYear()) // 1\n      .average(); // 0,5\n\n    tmp.ifPresentOrElse(System.out::println, () -> System.out.println(-1)); // 1\n  }\n\n  public boolean c() { // 0,5\n    return singles.stream() // 1\n      .anyMatch(a -> a.salesInMillions() > 10 // 0,5\n        && a.artist().country().equals(Country.CHN)); // 1\n  }\n\n  public List<String> d() { // 0,5\n    return singles.stream() // 1\n      .filter(a -> a.publishingYear().compareTo("2000") > 0) // 1\n      .sorted((a1, a2) -> Integer.valueOf(a2.salesInMillions()).compareTo(a1.salesInMillions())) // 1\n      .map(a -> a.name() + ": " + a.artist().name() + ", " + a.salesInMillions() + " Millionen") // 1\n      .limit(3) // 0,5\n      .toList(); // 0,5\n  }\n\n  public List<Single> e() { // 0,5\n    return singles.stream() // 1\n      .filter(a -> a.artist().equals(\n        new Artist("Ed Sheeran", Country.GBR, LocalDate.of(1991, 2, 17), true))) // 1\n      .toList(); // 0,5\n  }\n\n}\n')))}m.isMDXComponent=!0}}]);