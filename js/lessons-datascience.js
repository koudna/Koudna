/* ==========================================================
   DATA SCIENCE PATH — full lesson content (ar + en)
   Imported by js/data.js as catalog.data.lessons.
   Same shape as catalog.python.lessons:
     { title:{ar,en}, body:{ar,en}, code, quiz:{q,options,correct,explanation} }
   ========================================================== */

export const dataLessons = [

    /* ===================== المستوى 1: الأساسيات وبيئة العمل ===================== */

    {
        title: {
            ar: "ما هو علم البيانات؟ ومهارات المحلّل",
            en: "What is data science? And the analyst's skillset"
        },
        body: {
            ar: `
<p>تخيّل أن صاحب متجر إلكتروني يسألك: «لماذا انخفضت المبيعات الشهر الماضي؟». لن تجيب بالحدس. ستفتح جدول الطلبات، وتقارن الشهر بالذي قبله، وتقسّم الأرقام حسب المدينة والمنتج ووسيلة الدفع، حتى تجد أن مدينة واحدة توقّف فيها التوصيل ثلاثة أيام. هذا هو <strong>علم البيانات</strong>: تحويل بيانات خام إلى إجابة تدعم قراراً.</p>

<h3>الفرق بين البيانات والمعلومة</h3>

<p><strong>البيانات</strong> أرقام ونصوص مسجّلة كما هي: «طلب رقم 1042، الدار البيضاء، 240 درهم». <strong>المعلومة</strong> نمط مستخلص منها: «60% من الطلبات تأتي من ثلاث مدن فقط». عملك هو الجسر بينهما.</p>

<h3>خطوات أي تحليل</h3>

<ul>
    <li><strong>السؤال:</strong> ماذا نريد أن نعرف بالضبط؟ سؤال غامض يعطي تحليلاً بلا فائدة.</li>
    <li><strong>الجمع:</strong> من أين نأخذ البيانات؟ ملف، قاعدة بيانات، واجهة برمجية.</li>
    <li><strong>التنظيف:</strong> إصلاح القيم الناقصة والمكرّرة والصيغ غير الموحّدة — يستهلك عادةً أكثر من نصف الوقت.</li>
    <li><strong>الاستكشاف:</strong> حساب المتوسطات، رسم التوزيعات، مقارنة المجموعات.</li>
    <li><strong>التواصل:</strong> رقم أو رسم واحد يفهمه صاحب القرار في ثوانٍ.</li>
</ul>

<h3>ماذا تحتاج أن تتقن؟</h3>

<p>ثلاث ركائز: <strong>بايثون</strong> لمعالجة البيانات (وتحديداً مكتبتا NumPy وPandas)، <strong>الإحصاء</strong> لتفسير الأرقام دون خداع النفس، و<strong>التصور البياني</strong> لعرض النتيجة. هذا المسار يبني الثلاثة بالترتيب.</p>

<h3>أخطاء شائعة عند البداية</h3>

<ul>
    <li>القفز إلى الرسوم قبل تحديد السؤال — تحصل على رسوم جميلة لا تجيب عن شيء.</li>
    <li>الوثوق بأول متوسط تحسبه دون النظر إلى التوزيع والقيم الشاذة.</li>
    <li>الخلط بين «حدث س ثم ص» و«س سبّب ص» — سنعود لهذه النقطة مراراً.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>علم البيانات = تحويل بيانات خام إلى إجابة تدعم قراراً</li>
    <li>البيانات تُسجَّل، والمعلومة تُستخلَص</li>
    <li>كل تحليل يمرّ بـ: سؤال ← جمع ← تنظيف ← استكشاف ← تواصل</li>
    <li>الركائز التقنية: بايثون + الإحصاء + التصور</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>اختر قراراً واجهته مؤخراً (شراء هاتف، اختيار تخصّص). اكتب في ثلاثة أسطر: ما السؤال الدقيق؟ ما البيانات التي كنت ستحتاجها؟ وما الرقم الوحيد الذي كان سيحسم القرار؟</p>
`,
            en: `
<p>Imagine an online-store owner asking you: "Why did sales drop last month?" You won't answer with a guess. You'll open the orders table, compare the month to the one before, break the numbers down by city, product and payment method — until you find that in one city delivery was halted for three days. That is <strong>data science</strong>: turning raw data into an answer that supports a decision.</p>

<h3>Data vs. information</h3>

<p><strong>Data</strong> is recorded values as-is: "Order 1042, Casablanca, 240 MAD." <strong>Information</strong> is a pattern extracted from it: "60% of orders come from just three cities." Your job is the bridge between the two.</p>

<h3>The steps of any analysis</h3>

<ul>
    <li><strong>Question:</strong> what exactly do we want to know? A vague question yields a useless analysis.</li>
    <li><strong>Collection:</strong> where does the data come from — a file, a database, an API.</li>
    <li><strong>Cleaning:</strong> fixing missing, duplicate and inconsistent values — usually more than half the work.</li>
    <li><strong>Exploration:</strong> computing averages, plotting distributions, comparing groups.</li>
    <li><strong>Communication:</strong> one number or chart a decision-maker understands in seconds.</li>
</ul>

<h3>What do you need to master?</h3>

<p>Three pillars: <strong>Python</strong> for wrangling data (specifically NumPy and Pandas), <strong>statistics</strong> to interpret numbers without fooling yourself, and <strong>visualization</strong> to present the result. This path builds all three, in order.</p>

<h3>Common beginner mistakes</h3>

<ul>
    <li>Jumping to charts before fixing the question — you get pretty charts that answer nothing.</li>
    <li>Trusting the first average you compute without looking at the distribution and outliers.</li>
    <li>Confusing "X then Y happened" with "X caused Y" — we'll return to this point often.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>Data science = turning raw data into an answer that supports a decision</li>
    <li>Data is recorded; information is extracted</li>
    <li>Every analysis flows: question &rarr; collect &rarr; clean &rarr; explore &rarr; communicate</li>
    <li>Technical pillars: Python + statistics + visualization</li>
</ul>

<h3>Exercise</h3>

<p>Pick a decision you faced recently (buying a phone, choosing a major). In three lines write: what is the precise question? what data would you have needed? and what single number would have settled it?</p>
`
        },
        code: `<span class="cm"># تحليل مصغّر بلا أي مكتبة: لماذا انخفض المتوسط؟</span>
sales_this_month = [240, 180, 0, 0, 0, 320, 210]   <span class="cm"># ثلاثة أيام بصفر مبيعات</span>
sales_last_month = [240, 180, 300, 260, 280, 320, 210]

<span class="kw">def</span> <span class="fn">average</span>(values):
    <span class="kw">return</span> <span class="fn">sum</span>(values) / <span class="fn">len</span>(values)

<span class="fn">print</span>(<span class="st">"متوسط هذا الشهر:"</span>, <span class="fn">average</span>(sales_this_month))   <span class="cm"># 178.5</span>
<span class="fn">print</span>(<span class="st">"متوسط الشهر الماضي:"</span>, <span class="fn">average</span>(sales_last_month))  <span class="cm"># 255.7</span>

<span class="cm"># السؤال الحقيقي ليس "كم انخفض؟" بل "أين ومتى؟"</span>
zero_days = [i <span class="kw">for</span> i, v <span class="kw">in</span> <span class="fn">enumerate</span>(sales_this_month) <span class="kw">if</span> v == 0]
<span class="fn">print</span>(<span class="st">"أيام بلا مبيعات:"</span>, zero_days)   <span class="cm"># [2, 3, 4]</span>`,
        quiz: {
            q: {
                ar: "في أي خطوة يقضي المحلّل عادةً أكثر من نصف وقته؟",
                en: "Which step does an analyst usually spend more than half their time on?"
            },
            options: {
                ar: ["تحديد السؤال", "تنظيف البيانات", "رسم النتائج النهائية", "كتابة التقرير"],
                en: ["Framing the question", "Cleaning the data", "Plotting the final results", "Writing the report"]
            },
            correct: 1,
            explanation: {
                ar: "البيانات الحقيقية تأتي دائماً بقيم ناقصة ومكرّرة وصيغ غير موحّدة. إصلاح ذلك قبل التحليل هو الجزء الأطول والأكثر تأثيراً على صحة النتيجة.",
                en: "Real data always arrives with missing, duplicate and inconsistent values. Fixing that before analysis is the longest part and the one that most affects whether the result is correct."
            }
        }
    },

    {
        title: {
            ar: "بيئة العمل: Jupyter Notebook وGoogle Colab",
            en: "Your workspace: Jupyter Notebook and Google Colab"
        },
        body: {
            ar: `
<p>حين تكتب برنامجاً عادياً تشغّل الملف كاملاً في كل مرة. لكن التحليل مختلف: تحمّل ملفاً كبيراً مرة واحدة، ثم تجرّب عليه عشرات الأفكار. لو أعدت تحميله في كل تجربة لأضعت وقتك. لهذا يستخدم المحلّلون <strong>دفتر Jupyter</strong>: بيئة مقسّمة إلى <strong>خلايا</strong> تشغّل كلاً منها وحدها وتبقى النتيجة في الذاكرة.</p>

<h3>الخلية: وحدة التنفيذ</h3>

<p>الدفتر شريط من الخلايا. كل خلية إمّا <strong>كود</strong> يُنفَّذ بالضغط على <code>Shift + Enter</code>، أو <strong>نص Markdown</strong> لكتابة الشرح والعناوين. الناتج يظهر مباشرة تحت الخلية: رقم، جدول، أو رسم بياني.</p>

<h3>الحالة تبقى بين الخلايا</h3>

<p>إذا عرّفت <code>data</code> في الخلية الأولى، تجده جاهزاً في كل الخلايا التالية دون إعادة تحميل. هذه أقوى ميزة وأخطر فخّ في آن: النتيجة تعتمد على <em>ترتيب</em> تشغيلك للخلايا لا على ترتيبها في الصفحة.</p>

<h3>Colab: Jupyter بلا تثبيت</h3>

<p><strong>Google Colab</strong> دفتر Jupyter يعمل في المتصفح على خوادم جوجل مجاناً. لا تثبيت، وPandas وNumPy وMatplotlib مثبّتة سلفاً. افتح <code>colab.research.google.com</code> وابدأ فوراً. البديل المحلّي: ثبّت <code>anaconda</code> التي تجمع بايثون وJupyter وكل المكتبات في حزمة واحدة.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>تشغيل الخلايا بترتيب غير منطقي</strong> ثم الاندهاش من الناتج. الحل: من قائمة Runtime اختر «Restart and run all» بين الحين والآخر للتأكد أن الدفتر يعمل من الصفر.</li>
    <li><strong>خلية تحميل ثقيلة في الأعلى</strong> تعيد التنفيذ بلا داعٍ. ضعها وحدها ولا تلمسها.</li>
    <li><strong>نسيان حفظ الدفتر</strong> — Colab يحفظ في Google Drive تلقائياً، لكن Jupyter المحلّي لا.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>الدفتر يقسّم العمل إلى خلايا تُنفَّذ كلٌّ على حدة بـ <code>Shift + Enter</code></li>
    <li>الحالة (المتغيّرات) تبقى في الذاكرة بين الخلايا</li>
    <li>الناتج يعتمد على ترتيب التشغيل — لذا «Restart and run all» بانتظام</li>
    <li>Colab يعطيك بيئة جاهزة بلا تثبيت</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>افتح Colab، أنشئ دفتراً جديداً. في الخلية الأولى عرّف قائمة أرقام. في الثانية احسب متوسطها. في الثالثة اطبع أكبر قيمة. الآن غيّر القائمة في الخلية الأولى وأعد تشغيل الخليتين الأخريين فقط ولاحظ كيف تتغيّر النتائج.</p>
`,
            en: `
<p>When you write an ordinary program you run the whole file every time. Analysis is different: you load a large file once, then try dozens of ideas on it. Reloading it every time would waste your time. That's why analysts use the <strong>Jupyter notebook</strong>: an environment split into <strong>cells</strong> that you run one at a time, with results kept in memory.</p>

<h3>The cell: the unit of execution</h3>

<p>A notebook is a strip of cells. Each is either <strong>code</strong> run with <code>Shift + Enter</code>, or <strong>Markdown text</strong> for explanations and headings. Output appears right below the cell: a number, a table, or a chart.</p>

<h3>State persists between cells</h3>

<p>If you define <code>data</code> in the first cell, it's ready in every later cell without reloading. This is the most powerful feature and the sharpest trap at once: the result depends on the <em>order</em> in which you ran the cells, not their order on the page.</p>

<h3>Colab: Jupyter with no install</h3>

<p><strong>Google Colab</strong> is a Jupyter notebook that runs in the browser on Google's servers for free. No install, and Pandas, NumPy and Matplotlib come pre-installed. Open <code>colab.research.google.com</code> and start immediately. The local alternative: install <code>anaconda</code>, which bundles Python, Jupyter and every library in one package.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Running cells out of logical order</strong> then being surprised by the output. Fix: from the Runtime menu choose "Restart and run all" now and then to confirm the notebook works from scratch.</li>
    <li><strong>A heavy loading cell at the top</strong> re-running needlessly. Put it on its own and leave it alone.</li>
    <li><strong>Forgetting to save</strong> — Colab autosaves to Google Drive, but local Jupyter does not.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>A notebook splits work into cells run individually with <code>Shift + Enter</code></li>
    <li>State (variables) stays in memory between cells</li>
    <li>Output depends on run order — so "Restart and run all" regularly</li>
    <li>Colab gives you a ready environment with no install</li>
</ul>

<h3>Exercise</h3>

<p>Open Colab, create a new notebook. In the first cell define a list of numbers. In the second compute its average. In the third print the largest value. Now change the list in the first cell and re-run only the last two cells, and watch how the results change.</p>
`
        },
        code: `<span class="cm"># خلية 1 — تُشغَّل مرة واحدة</span>
temperatures = [22, 25, 19, 30, 28, 24, 21]

<span class="cm"># خلية 2 — جرّب أفكاراً بلا إعادة تعريف القائمة</span>
average = <span class="fn">sum</span>(temperatures) / <span class="fn">len</span>(temperatures)
<span class="fn">print</span>(<span class="st">f"المتوسط: {average:.1f}"</span>)

<span class="cm"># خلية 3 — تعتمد على ما سبق</span>
hottest = <span class="fn">max</span>(temperatures)
coldest = <span class="fn">min</span>(temperatures)
<span class="fn">print</span>(<span class="st">f"المدى: من {coldest} إلى {hottest}"</span>)

<span class="cm"># لو غيّرت temperatures في خلية 1 وأعدت تشغيل 2 و3 فقط،</span>
<span class="cm"># ستتحدّث النتائج — هذه قوة الدفتر</span>`,
        quiz: {
            q: {
                ar: "لماذا يُنصح بتشغيل «Restart and run all» بين الحين والآخر؟",
                en: "Why is it recommended to run \"Restart and run all\" now and then?"
            },
            options: {
                ar: [
                    "لأنه يجعل الكود أسرع",
                    "للتأكد أن نتائج الدفتر لا تعتمد على ترتيب تشغيل عشوائي للخلايا",
                    "لأنه يحفظ الدفتر تلقائياً",
                    "لتحديث المكتبات"
                ],
                en: [
                    "Because it makes the code faster",
                    "To confirm the notebook's results don't depend on a random cell run order",
                    "Because it autosaves the notebook",
                    "To update the libraries"
                ]
            },
            correct: 1,
            explanation: {
                ar: "بما أن الحالة تبقى في الذاكرة، قد يعطي الدفتر نتيجة صحيحة فقط لأنك شغّلت الخلايا بترتيب معيّن. إعادة التشغيل من الصفر تكشف ما إذا كان التحليل يعمل فعلاً بترتيبه المكتوب.",
                en: "Since state stays in memory, a notebook may give a correct result only because you ran cells in a particular order. Restarting from scratch reveals whether the analysis actually works in its written order."
            }
        }
    },

    {
        title: {
            ar: "بايثون للبيانات: القوائم والقواميس",
            en: "Python for data: lists and dictionaries"
        },
        body: {
            ar: `
<p>قبل NumPy وPandas، كل جدول بيانات في ذهنك هو في الحقيقة تركيب من نوعين أساسيين في بايثون: <strong>القائمة</strong> لصفٍّ من القيم، و<strong>القاموس</strong> لربط اسم بقيمة. من يفهم هذين جيداً يفهم Pandas بسرعة، لأن Pandas مبنية فوقهما.</p>

<h3>القائمة: سلسلة مرتّبة</h3>

<p>القائمة تخزّن قيماً بترتيب، وتصل إلى كلٍّ منها برقم موضعها (يبدأ من صفر). <code>prices[0]</code> أول قيمة، <code>prices[-1]</code> آخر قيمة. والتقطيع <code>prices[1:4]</code> يعطيك القيم من الموضع 1 حتى 3.</p>

<h3>القاموس: بحث بالاسم لا بالموضع</h3>

<p>حين يكون لكل قيمة <em>معنى</em> — «الاسم»، «العمر»، «المدينة» — نستخدم قاموساً: <code>{"name": "Sara", "age": 28}</code>. الوصول بـ <code>person["age"]</code>. هذا بالضبط شكل «صفّ» واحد في جدول بيانات.</p>

<h3>الجدول = قائمة من القواميس</h3>

<p>مجموعة سجلّات متشابهة تُمثَّل كقائمة قواميس: كل قاموس صفّ، ومفاتيحه أعمدة. هذه هي الصيغة التي تخرج بها البيانات من ملفات JSON ومن واجهات الويب، وهي ما تحوّله Pandas إلى <code>DataFrame</code> بسطر واحد.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>الوصول إلى مفتاح غير موجود</strong> بـ <code>person["salary"]</code> يرمي <code>KeyError</code>. استخدم <code>person.get("salary", 0)</code> لقيمة افتراضية آمنة.</li>
    <li><strong>الخلط بين الموضع والقيمة</strong>: <code>prices[2]</code> ثالث سعر، وليس السعر الذي قيمته 2.</li>
    <li><strong>تعديل قائمة أثناء المرور عليها</strong> بحلقة يتخطّى عناصر. اصنع قائمة جديدة بدلاً من ذلك.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>القائمة: قيم مرتّبة، الوصول بالموضع، الفهرسة من صفر، تقطيع بـ <code>[a:b]</code></li>
    <li>القاموس: أزواج مفتاح/قيمة، الوصول بالاسم، يمثّل صفّاً واحداً</li>
    <li>قائمة من القواميس = جدول بيانات كامل</li>
    <li><code>.get(key, default)</code> أأمن من الأقواس المربّعة</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>مثّل ثلاثة من أصدقائك كقائمة قواميس، لكلٍّ منها <code>name</code> و<code>city</code> و<code>age</code>. اكتب حلقة تطبع اسم كل صديق مع مدينته، ثم احسب متوسط الأعمار.</p>
`,
            en: `
<p>Before NumPy and Pandas, every data table in your mind is really built from two basic Python types: the <strong>list</strong> for a row of values, and the <strong>dictionary</strong> for tying a name to a value. Whoever understands these two well understands Pandas quickly, because Pandas is built on top of them.</p>

<h3>The list: an ordered sequence</h3>

<p>A list stores values in order, and you reach each by its position index (starting at zero). <code>prices[0]</code> is the first value, <code>prices[-1]</code> the last. Slicing <code>prices[1:4]</code> gives you positions 1 through 3.</p>

<h3>The dictionary: lookup by name, not position</h3>

<p>When each value has a <em>meaning</em> — "name", "age", "city" — we use a dictionary: <code>{"name": "Sara", "age": 28}</code>. Access with <code>person["age"]</code>. This is exactly the shape of one "row" in a data table.</p>

<h3>A table = a list of dictionaries</h3>

<p>A set of similar records is represented as a list of dictionaries: each dictionary is a row, its keys are columns. This is the form data comes out of JSON files and web APIs, and it's what Pandas turns into a <code>DataFrame</code> in one line.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Accessing a missing key</strong> with <code>person["salary"]</code> raises <code>KeyError</code>. Use <code>person.get("salary", 0)</code> for a safe default.</li>
    <li><strong>Confusing position and value</strong>: <code>prices[2]</code> is the third price, not the price whose value is 2.</li>
    <li><strong>Modifying a list while looping over it</strong> skips elements. Build a new list instead.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>List: ordered values, access by position, zero-indexed, slice with <code>[a:b]</code></li>
    <li>Dictionary: key/value pairs, access by name, represents one row</li>
    <li>A list of dictionaries = a full data table</li>
    <li><code>.get(key, default)</code> is safer than square brackets</li>
</ul>

<h3>Exercise</h3>

<p>Represent three of your friends as a list of dictionaries, each with <code>name</code>, <code>city</code> and <code>age</code>. Write a loop that prints each friend's name with their city, then compute the average age.</p>
`
        },
        code: `<span class="cm"># قائمة: صفّ من القيم، الوصول بالموضع</span>
prices = [240, 180, 300, 260]
<span class="fn">print</span>(prices[0], prices[-1])   <span class="cm"># 240  260</span>
<span class="fn">print</span>(prices[1:3])           <span class="cm"># [180, 300]</span>

<span class="cm"># قاموس: صفّ واحد له معنى</span>
order = {<span class="st">"id"</span>: 1042, <span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"total"</span>: 240}
<span class="fn">print</span>(order[<span class="st">"city"</span>])            <span class="cm"># Casablanca</span>
<span class="fn">print</span>(order.<span class="fn">get</span>(<span class="st">"discount"</span>, 0))  <span class="cm"># 0  (مفتاح غير موجود — بلا خطأ)</span>

<span class="cm"># جدول كامل = قائمة من القواميس</span>
orders = [
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"total"</span>: 240},
    {<span class="st">"city"</span>: <span class="st">"Rabat"</span>,      <span class="st">"total"</span>: 180},
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"total"</span>: 300},
]
total_revenue = <span class="fn">sum</span>(o[<span class="st">"total"</span>] <span class="kw">for</span> o <span class="kw">in</span> orders)
<span class="fn">print</span>(total_revenue)          <span class="cm"># 720</span>`,
        quiz: {
            q: {
                ar: "كيف تُمثَّل مجموعة سجلّات متشابهة (جدول بيانات) بأدوات بايثون الأساسية؟",
                en: "How is a set of similar records (a data table) represented with basic Python tools?"
            },
            options: {
                ar: [
                    "قائمة من الأرقام",
                    "قاموس واحد كبير",
                    "قائمة من القواميس — كل قاموس صفّ ومفاتيحه أعمدة",
                    "نصّ مفصول بفواصل"
                ],
                en: [
                    "A list of numbers",
                    "One big dictionary",
                    "A list of dictionaries — each dict a row, its keys the columns",
                    "A comma-separated string"
                ]
            },
            correct: 2,
            explanation: {
                ar: "كل صفّ سجلٌّ له حقول مسمّاة (قاموس)، ومجموعة الصفوف قائمة. هذه الصيغة هي ما يخرج من JSON وواجهات الويب، وما تحوّله Pandas إلى DataFrame مباشرة.",
                en: "Each row is a record with named fields (a dictionary), and the set of rows is a list. This form is what comes out of JSON and web APIs, and what Pandas turns into a DataFrame directly."
            }
        }
    },

    {
        title: {
            ar: "بايثون للبيانات: الحلقات والدوال وf-strings",
            en: "Python for data: loops, functions and f-strings"
        },
        body: {
            ar: `
<p>التحليل يكرّر العملية نفسها على كل صفّ: احسب، صنّف، اجمع. أداتك لذلك <strong>الحلقة</strong>. وحين تتكرّر عملية حسابية في أكثر من مكان، تغلّفها في <strong>دالة</strong> باسم واضح فتقرأ كودك كأنه جُمَل. وأخيراً <strong>f-string</strong> لعرض النتائج منسّقة في تقرير مقروء.</p>

<h3>الحلقة على البيانات</h3>

<p><code>for order in orders:</code> يمرّ على كل سجلّ. داخلها تصل إلى حقوله وتجمعها في متغيّر تراكمي، أو تضيفها إلى قائمة نتائج جديدة. النمط الأكثر شيوعاً: ابدأ بـ <code>total = 0</code> ثم <code>total += order["amount"]</code>.</p>

<h3>الدالة: عملية لها اسم</h3>

<p>الدالة تأخذ مدخلات وتُرجع نتيجة بـ <code>return</code>. <code>def average(values): return sum(values) / len(values)</code>. الفائدة ليست تقنية فقط: <code>average(prices)</code> أوضح من تكرار المعادلة، وإذا احتجت تعديلها تعدّلها في مكان واحد.</p>

<h3>f-string: نصّ فيه قيم</h3>

<p>ابدأ النصّ بـ <code>f</code> وضع المتغيّرات بين قوسين معقوفين: <code>f"المدينة {city}: {revenue} درهم"</code>. للتحكم في الأرقام العشرية: <code>f"{ratio:.1%}"</code> يعرض نسبة مئوية برقم عشري واحد، و<code>f"{price:,.0f}"</code> يضيف فاصلة الآلاف.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>نسيان تهيئة المتراكم</strong> قبل الحلقة يرمي <code>NameError</code> عند أول <code>+=</code>.</li>
    <li><strong>دالة بلا <code>return</code></strong> تُرجع <code>None</code> صامتة، فتظهر <code>None</code> في تقريرك لاحقاً.</li>
    <li><strong>نسيان حرف <code>f</code></strong> قبل النصّ يطبع <code>{city}</code> حرفياً بدل القيمة.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>الحلقة تكرّر عملية على كل سجلّ؛ نمط التراكم: <code>total = 0</code> ثم <code>total += ...</code></li>
    <li>الدالة تغلّف عملية متكرّرة وتُرجع نتيجتها بـ <code>return</code></li>
    <li>f-string يدمج القيم في النصّ؛ <code>:.1%</code> للنِّسَب و<code>:,.0f</code> لفاصلة الآلاف</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>لديك قائمة قواميس مبيعات، كل واحد فيه <code>city</code> و<code>amount</code>. اكتب دالة <code>revenue_by_city(sales)</code> تُرجع قاموساً: المدينة ← مجموع مبيعاتها. ثم اطبع كل سطر بصيغة <code>f"{city}: {total:,.0f} درهم"</code>.</p>
`,
            en: `
<p>Analysis repeats the same operation on every row: compute, classify, sum. Your tool for that is the <strong>loop</strong>. When a calculation repeats in more than one place, you wrap it in a <strong>function</strong> with a clear name so your code reads like sentences. Finally the <strong>f-string</strong> to present results formatted in a readable report.</p>

<h3>Looping over data</h3>

<p><code>for order in orders:</code> walks every record. Inside it you reach its fields and accumulate them into a running variable, or append them to a new results list. The most common pattern: start with <code>total = 0</code> then <code>total += order["amount"]</code>.</p>

<h3>The function: a named operation</h3>

<p>A function takes inputs and returns a result with <code>return</code>. <code>def average(values): return sum(values) / len(values)</code>. The benefit isn't only technical: <code>average(prices)</code> is clearer than repeating the formula, and if you need to change it you change it in one place.</p>

<h3>f-string: text with values in it</h3>

<p>Start the string with <code>f</code> and put variables in curly braces: <code>f"City {city}: {revenue} MAD"</code>. To control decimals: <code>f"{ratio:.1%}"</code> shows a percentage with one decimal, and <code>f"{price:,.0f}"</code> adds a thousands separator.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Forgetting to initialize the accumulator</strong> before the loop raises <code>NameError</code> on the first <code>+=</code>.</li>
    <li><strong>A function with no <code>return</code></strong> silently returns <code>None</code>, which then shows up as <code>None</code> in your report later.</li>
    <li><strong>Forgetting the <code>f</code></strong> before the string prints <code>{city}</code> literally instead of the value.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>A loop repeats an operation over every record; accumulation pattern: <code>total = 0</code> then <code>total += ...</code></li>
    <li>A function wraps a repeated operation and returns its result with <code>return</code></li>
    <li>f-strings embed values in text; <code>:.1%</code> for ratios and <code>:,.0f</code> for a thousands separator</li>
</ul>

<h3>Exercise</h3>

<p>You have a list of sales dictionaries, each with <code>city</code> and <code>amount</code>. Write a function <code>revenue_by_city(sales)</code> that returns a dictionary: city &rarr; total sales. Then print each line as <code>f"{city}: {total:,.0f} MAD"</code>.</p>
`
        },
        code: `sales = [
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"amount"</span>: 2400},
    {<span class="st">"city"</span>: <span class="st">"Rabat"</span>,      <span class="st">"amount"</span>: 1800},
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"amount"</span>: 3100},
]

<span class="kw">def</span> <span class="fn">revenue_by_city</span>(records):
    <span class="cm"># نمط التراكم داخل قاموس</span>
    totals = {}
    <span class="kw">for</span> r <span class="kw">in</span> records:
        city = r[<span class="st">"city"</span>]
        totals[city] = totals.<span class="fn">get</span>(city, 0) + r[<span class="st">"amount"</span>]
    <span class="kw">return</span> totals

result = <span class="fn">revenue_by_city</span>(sales)

<span class="kw">for</span> city, total <span class="kw">in</span> result.<span class="fn">items</span>():
    <span class="fn">print</span>(<span class="st">f"{city}: {total:,.0f} درهم"</span>)
<span class="cm"># Casablanca: 5,500 درهم</span>
<span class="cm"># Rabat: 1,800 درهم</span>`,
        quiz: {
            q: {
                ar: "ماذا تطبع الجملة <code>print(\"القيمة {x}\")</code> إذا كانت x = 5؟",
                en: "What does <code>print(\"Value {x}\")</code> print when x = 5?"
            },
            options: {
                ar: ["القيمة 5", "القيمة {x} حرفياً", "خطأ NameError", "القيمة {5}"],
                en: ["Value 5", "Value {x} literally", "A NameError", "Value {5}"]
            },
            correct: 1,
            explanation: {
                ar: "بدون حرف f قبل علامة التنصيص، بايثون يعامل الأقواس المعقوفة كنصّ عادي. الصيغة الصحيحة: f\"القيمة {x}\".",
                en: "Without the f before the quote, Python treats the curly braces as plain text. The correct form is f\"Value {x}\"."
            }
        }
    },

    {
        title: {
            ar: "أنواع المتغيّرات: كمّي، فئوي، ترتيبي، زمني",
            en: "Variable types: quantitative, categorical, ordinal, temporal"
        },
        body: {
            ar: `
<p>قبل أن تحسب أي شيء، اسأل: <strong>ما نوع هذا العمود؟</strong> الجواب يحدّد ما يجوز فعله به. حساب «متوسط رقم الهاتف» بلا معنى، ورسم توزيع «المدينة» كأنها رقم خطأ. تصنيف الأعمدة صحيحاً هو أول خطوة استكشاف.</p>

<h3>كمّي (Quantitative)</h3>

<p>أرقام تقبل العمليات الحسابية: السعر، العمر، درجة الحرارة، عدد الطلبات. نوعان: <strong>متّصل</strong> (أي قيمة ضمن مدى: الوزن 71.4) و<strong>منفصل</strong> (أعداد صحيحة تُعَدّ: 3 أطفال). عليها نحسب المتوسط والانحراف المعياري ونرسم histogram.</p>

<h3>فئوي (Categorical)</h3>

<p>تسميات بلا ترتيب طبيعي: المدينة، الجنس، وسيلة الدفع، لون المنتج. لا معنى لمتوسطها. نحسب <strong>التكرار</strong> (كم طلباً من كل مدينة) ونرسمها bar chart. حتى لو خُزِّنت كأرقام (1 = بطاقة، 2 = نقداً) تبقى فئوية.</p>

<h3>ترتيبي (Ordinal)</h3>

<p>فئات <em>لها</em> ترتيب لكن المسافات بينها غير متساوية أو غير معروفة: تقييم «ضعيف / متوسط / ممتاز»، مستوى تعليمي، حجم «S / M / L». يجوز ترتيبها وحساب الوسيط، لكن لا يجوز قول «ممتاز = 3 أضعاف ضعيف».</p>

<h3>زمني (Temporal)</h3>

<p>تواريخ وأوقات. مميّزة لأنها تحمل ترتيباً <em>ومسافات</em> ذات معنى، وتتيح تحليلات خاصة: الاتجاه عبر الزمن، الموسمية، المقارنة بين فترتين. نحوّلها دائماً إلى نوع تاريخ حقيقي لا نتركها نصّاً.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>معاملة رمز فئوي كرقم</strong>: عمود «الحي» مرمّز 1–5، فتحسب متوسطه 2.7 — رقم بلا معنى.</li>
    <li><strong>ترك التاريخ نصّاً</strong> فيُرتَّب أبجدياً: «10 يناير» قبل «2 فبراير».</li>
    <li><strong>معاملة الترتيبي كفئوي</strong> فتضيع معلومة الترتيب في الرسوم.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>كمّي: أرقام حقيقية ← متوسط، انحراف، histogram</li>
    <li>فئوي: تسميات بلا ترتيب ← تكرار، bar chart</li>
    <li>ترتيبي: فئات مرتّبة بمسافات غير معروفة ← وسيط، ترتيب محفوظ</li>
    <li>زمني: تواريخ ← اتجاه وموسمية، حوّلها لنوع تاريخ</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>لجدول متجر بأعمدة: <code>order_id</code>، <code>city</code>، <code>total</code>، <code>rating</code> (ضعيف/جيد/ممتاز)، <code>order_date</code>، <code>payment_code</code> (1/2/3). صنّف كل عمود إلى أحد الأنواع الأربعة، واذكر عملية إحصائية واحدة مناسبة لكلٍّ منها.</p>
`,
            en: `
<p>Before you compute anything, ask: <strong>what type is this column?</strong> The answer decides what you're allowed to do with it. Computing the "average phone number" is meaningless, and plotting the distribution of "city" as if it were a number is wrong. Classifying columns correctly is the first step of exploration.</p>

<h3>Quantitative</h3>

<p>Numbers that admit arithmetic: price, age, temperature, order count. Two kinds: <strong>continuous</strong> (any value in a range: weight 71.4) and <strong>discrete</strong> (whole numbers you count: 3 children). On these we compute the mean and standard deviation and draw a histogram.</p>

<h3>Categorical</h3>

<p>Labels with no natural order: city, gender, payment method, product color. Their average is meaningless. We compute the <strong>frequency</strong> (how many orders per city) and draw a bar chart. Even if stored as numbers (1 = card, 2 = cash) they stay categorical.</p>

<h3>Ordinal</h3>

<p>Categories that <em>do</em> have an order, but the gaps between them are unequal or unknown: a "poor / fair / excellent" rating, education level, "S / M / L" size. You may order them and compute the median, but you may not say "excellent = 3&times; poor".</p>

<h3>Temporal</h3>

<p>Dates and times. Special because they carry an order <em>and</em> meaningful gaps, and enable specific analyses: trend over time, seasonality, comparing two periods. Always convert them to a real date type rather than leaving them as text.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Treating a categorical code as a number</strong>: a "district" column coded 1&ndash;5, and you compute its average of 2.7 — a meaningless number.</li>
    <li><strong>Leaving dates as text</strong> so they sort alphabetically: "Jan 10" before "Feb 2".</li>
    <li><strong>Treating ordinal as categorical</strong> so you lose the order information in charts.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>Quantitative: real numbers &rarr; mean, std, histogram</li>
    <li>Categorical: unordered labels &rarr; frequency, bar chart</li>
    <li>Ordinal: ordered categories with unknown gaps &rarr; median, keep the order</li>
    <li>Temporal: dates &rarr; trend and seasonality, convert to a date type</li>
</ul>

<h3>Exercise</h3>

<p>For a store table with columns: <code>order_id</code>, <code>city</code>, <code>total</code>, <code>rating</code> (poor/good/excellent), <code>order_date</code>, <code>payment_code</code> (1/2/3). Classify each column into one of the four types, and name one statistic appropriate for each.</p>
`
        },
        code: `<span class="cm"># نفس القيمة، تفسير مختلف حسب النوع</span>

<span class="cm"># كمّي — المتوسط له معنى</span>
totals = [240, 180, 300, 260, 280]
<span class="fn">print</span>(<span class="fn">sum</span>(totals) / <span class="fn">len</span>(totals))     <span class="cm"># 252.0  ✓ مفيد</span>

<span class="cm"># فئوي — نحسب التكرار لا المتوسط</span>
cities = [<span class="st">"Casa"</span>, <span class="st">"Rabat"</span>, <span class="st">"Casa"</span>, <span class="st">"Casa"</span>, <span class="st">"Fes"</span>]
counts = {}
<span class="kw">for</span> c <span class="kw">in</span> cities:
    counts[c] = counts.<span class="fn">get</span>(c, 0) + 1
<span class="fn">print</span>(counts)     <span class="cm"># {'Casa': 3, 'Rabat': 1, 'Fes': 1}  ✓</span>

<span class="cm"># ترتيبي — نرتّب حسب سلّم معروف لا أبجدياً</span>
order = {<span class="st">"ضعيف"</span>: 0, <span class="st">"جيد"</span>: 1, <span class="st">"ممتاز"</span>: 2}
ratings = [<span class="st">"جيد"</span>, <span class="st">"ممتاز"</span>, <span class="st">"ضعيف"</span>, <span class="st">"جيد"</span>]
ratings.<span class="fn">sort</span>(key=<span class="kw">lambda</span> r: order[r])
<span class="fn">print</span>(ratings)   <span class="cm"># ['ضعيف', 'جيد', 'جيد', 'ممتاز']  ✓</span>`,
        quiz: {
            q: {
                ar: "عمود «وسيلة الدفع» مخزّن كأرقام: 1 = بطاقة، 2 = نقداً، 3 = تحويل. ما نوعه؟",
                en: "A \"payment method\" column is stored as numbers: 1 = card, 2 = cash, 3 = transfer. What type is it?"
            },
            options: {
                ar: [
                    "كمّي، لأنه مخزّن كأرقام",
                    "فئوي، لأن الأرقام مجرّد رموز بلا ترتيب أو مسافات ذات معنى",
                    "ترتيبي، لأن 3 > 2 > 1",
                    "زمني"
                ],
                en: [
                    "Quantitative, because it's stored as numbers",
                    "Categorical, because the numbers are just codes with no meaningful order or spacing",
                    "Ordinal, because 3 > 2 > 1",
                    "Temporal"
                ]
            },
            correct: 1,
            explanation: {
                ar: "طريقة التخزين لا تحدّد النوع. «بطاقة» و«نقداً» تسميات بلا ترتيب طبيعي، فالعمود فئوي مهما كان مرمّزاً بأرقام. حساب متوسطه (2.0 مثلاً) لا معنى له.",
                en: "How it's stored doesn't determine the type. \"Card\" and \"cash\" are labels with no natural order, so the column is categorical no matter how it's coded. Its average (say 2.0) is meaningless."
            }
        }
    },

    {
        title: {
            ar: "مشروع: تحليل مصاريف شهرية ببايثون النقي",
            en: "Project: analyzing monthly expenses with pure Python"
        },
        body: {
            ar: `
<p>جمعنا في هذا المستوى: القوائم، القواميس، الحلقات، الدوال، f-strings، وأنواع المتغيّرات. الآن نبني أداة تحليل مصاريف كاملة <strong>بلا أي مكتبة</strong> — لتشعر بالجهد الذي ستوفّره Pandas لاحقاً.</p>

<h3>البيانات</h3>

<p>قائمة قواميس، كل واحد عملية إنفاق: <code>date</code> (نصّ)، <code>category</code> (فئوي: طعام، نقل، فواتير…)، <code>amount</code> (كمّي).</p>

<h3>ما سنحسبه</h3>

<ul>
    <li><strong>الإجمالي</strong>: مجموع كل المبالغ.</li>
    <li><strong>حسب الفئة</strong>: قاموس الفئة ← مجموعها، ثم ترتيبها تنازلياً.</li>
    <li><strong>أكبر عملية</strong> ونسبتها من الإجمالي.</li>
    <li><strong>المتوسط اليومي</strong>: الإجمالي ÷ عدد الأيام المميّزة.</li>
</ul>

<h3>البناء على ثلاث دوال</h3>

<p><code>total(expenses)</code> تُرجع المجموع. <code>by_category(expenses)</code> تُرجع قاموساً. <code>report(expenses)</code> تستدعي الاثنتين وتطبع تقريراً منسّقاً بـ f-strings. تقسيم المنطق إلى دوال صغيرة يجعل كل جزء قابلاً للاختبار وحده.</p>

<h3>أخطاء ستقع فيها</h3>

<ul>
    <li>القسمة على صفر لو كانت القائمة فارغة — تحقّق <code>if not expenses: return</code>.</li>
    <li>حساب «عدد الأيام» بـ <code>len(expenses)</code> بدل عدد التواريخ <em>المميّزة</em> — استخدم <code>set</code>.</li>
    <li>عرض النِّسَب بلا تنسيق: <code>0.2733</code> بدل <code>27.3%</code>.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>تحليل حقيقي كامل ممكن بأدوات بايثون الأساسية — لكنه مطوّل</li>
    <li>نمط «قاموس تراكمي» يحلّ معظم أسئلة «المجموع حسب الفئة»</li>
    <li><code>set</code> يعطي القيم المميّزة (عدد الأيام، عدد المدن)</li>
    <li>تقسيم المنطق إلى دوال صغيرة مسمّاة يجعل الكود مقروءاً وقابلاً للتوسيع</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>وسّع <code>report</code> لتضيف: الفئة التي أنفقت فيها أكثر، وتحذيراً نصّياً إذا تجاوزت فئة «طعام» 40% من الإجمالي. في الدرس القادم سنعيد بناء هذا التحليل كله بـ NumPy في أسطر قليلة.</p>
`,
            en: `
<p>In this module we gathered: lists, dictionaries, loops, functions, f-strings, and variable types. Now we build a full expense-analysis tool <strong>with no library at all</strong> — so you feel the effort Pandas will save you later.</p>

<h3>The data</h3>

<p>A list of dictionaries, each one a spending entry: <code>date</code> (string), <code>category</code> (categorical: food, transport, bills&hellip;), <code>amount</code> (quantitative).</p>

<h3>What we'll compute</h3>

<ul>
    <li><strong>Total</strong>: the sum of all amounts.</li>
    <li><strong>By category</strong>: a dictionary of category &rarr; its sum, then sorted descending.</li>
    <li><strong>Largest entry</strong> and its share of the total.</li>
    <li><strong>Daily average</strong>: total &divide; number of distinct days.</li>
</ul>

<h3>Building on three functions</h3>

<p><code>total(expenses)</code> returns the sum. <code>by_category(expenses)</code> returns a dictionary. <code>report(expenses)</code> calls both and prints a formatted report with f-strings. Splitting the logic into small functions makes each part testable on its own.</p>

<h3>Mistakes you'll make</h3>

<ul>
    <li>Dividing by zero if the list is empty — check <code>if not expenses: return</code>.</li>
    <li>Computing "number of days" as <code>len(expenses)</code> instead of the number of <em>distinct</em> dates — use a <code>set</code>.</li>
    <li>Showing ratios unformatted: <code>0.2733</code> instead of <code>27.3%</code>.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>A full real analysis is possible with basic Python — but it's long-winded</li>
    <li>The "accumulating dictionary" pattern solves most "sum by category" questions</li>
    <li><code>set</code> gives the distinct values (number of days, number of cities)</li>
    <li>Splitting logic into small named functions keeps code readable and extensible</li>
</ul>

<h3>Exercise</h3>

<p>Extend <code>report</code> to add: the category you spent most on, and a text warning if "food" exceeds 40% of the total. In the next lesson we'll rebuild this whole analysis with NumPy in a few lines.</p>
`
        },
        code: `expenses = [
    {<span class="st">"date"</span>: <span class="st">"2026-03-01"</span>, <span class="st">"category"</span>: <span class="st">"طعام"</span>,  <span class="st">"amount"</span>: 85},
    {<span class="st">"date"</span>: <span class="st">"2026-03-01"</span>, <span class="st">"category"</span>: <span class="st">"نقل"</span>,   <span class="st">"amount"</span>: 20},
    {<span class="st">"date"</span>: <span class="st">"2026-03-02"</span>, <span class="st">"category"</span>: <span class="st">"فواتير"</span>, <span class="st">"amount"</span>: 300},
    {<span class="st">"date"</span>: <span class="st">"2026-03-03"</span>, <span class="st">"category"</span>: <span class="st">"طعام"</span>,  <span class="st">"amount"</span>: 60},
]

<span class="kw">def</span> <span class="fn">total</span>(items):
    <span class="kw">return</span> <span class="fn">sum</span>(e[<span class="st">"amount"</span>] <span class="kw">for</span> e <span class="kw">in</span> items)

<span class="kw">def</span> <span class="fn">by_category</span>(items):
    out = {}
    <span class="kw">for</span> e <span class="kw">in</span> items:
        out[e[<span class="st">"category"</span>]] = out.<span class="fn">get</span>(e[<span class="st">"category"</span>], 0) + e[<span class="st">"amount"</span>]
    <span class="kw">return</span> out

<span class="kw">def</span> <span class="fn">report</span>(items):
    <span class="kw">if</span> <span class="kw">not</span> items:
        <span class="fn">print</span>(<span class="st">"لا توجد بيانات"</span>); <span class="kw">return</span>
    grand = <span class="fn">total</span>(items)
    days = <span class="fn">len</span>({e[<span class="st">"date"</span>] <span class="kw">for</span> e <span class="kw">in</span> items})   <span class="cm"># أيام مميّزة</span>
    <span class="fn">print</span>(<span class="st">f"الإجمالي: {grand:,.0f} درهم على {days} أيام"</span>)
    <span class="fn">print</span>(<span class="st">f"المتوسط اليومي: {grand / days:,.0f} درهم"</span>)
    <span class="kw">for</span> cat, amt <span class="kw">in</span> <span class="fn">sorted</span>(<span class="fn">by_category</span>(items).<span class="fn">items</span>(), key=<span class="kw">lambda</span> x: -x[1]):
        <span class="fn">print</span>(<span class="st">f"  {cat}: {amt:,.0f} ({amt / grand:.1%})"</span>)

<span class="fn">report</span>(expenses)`,
        quiz: {
            q: {
                ar: "لماذا نستخدم <code>len({e[\"date\"] for e in expenses})</code> بدل <code>len(expenses)</code> لحساب عدد الأيام؟",
                en: "Why use <code>len({e[\"date\"] for e in expenses})</code> instead of <code>len(expenses)</code> to count the number of days?"
            },
            options: {
                ar: [
                    "لا فرق بينهما",
                    "لأن اليوم الواحد قد يحوي عدة عمليات، ونريد عدد الأيام المميّزة لا عدد العمليات",
                    "لأن len لا تعمل على القوائم",
                    "لجعل الكود أسرع"
                ],
                en: [
                    "There's no difference",
                    "Because one day may contain several entries, and we want the number of distinct days, not the number of entries",
                    "Because len doesn't work on lists",
                    "To make the code faster"
                ]
            },
            correct: 1,
            explanation: {
                ar: "الحساب <code>{...}</code> يبني set من التواريخ، والـ set يحذف المكرّرات تلقائياً. لو استخدمنا len(expenses) لقسمنا الإجمالي على عدد العمليات (4) بدل الأيام (3) فيخرج متوسط يومي خاطئ.",
                en: "The <code>{...}</code> builds a set of the dates, and a set drops duplicates automatically. Using len(expenses) would divide the total by the entry count (4) instead of days (3), giving a wrong daily average."
            }
        }
    }

];
