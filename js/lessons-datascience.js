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
    },

    /* ===================== المستوى 2: NumPy ===================== */

    {
        title: {
            ar: "لماذا NumPy؟ المصفوفة مقابل القائمة",
            en: "Why NumPy? Arrays vs. lists"
        },
        body: {
            ar: `
<p>في الدرس السابق حسبنا مجاميع ومتوسّطات بحلقات <code>for</code>. تعمل جيداً على عشرات القيم، لكن التحليل الحقيقي يعمل على ملايين الصفوف، وهنا تصبح الحلقة بطيئة جداً. <strong>NumPy</strong> هي الحل: مكتبة تخزّن الأرقام في بنية واحدة متراصّة في الذاكرة، وتطبّق العمليات على كل القيم دفعة واحدة بسرعة لغة C.</p>

<h3>المصفوفة (ndarray): النوع الأساسي</h3>

<p>المصفوفة تشبه القائمة ظاهرياً، لكن بثلاثة فروق جوهرية: كل عناصرها من <strong>نوع واحد</strong> (كلها أعداد عشرية مثلاً)، حجمها <strong>ثابت</strong> بعد الإنشاء، وتدعم عمليات <strong>متّجهة</strong>: <code>arr * 2</code> يضرب كل عنصر في 2 بلا حلقة.</p>

<h3>لماذا هي أسرع؟</h3>

<ul>
    <li><strong>ذاكرة متراصّة:</strong> القائمة في بايثون مؤشّرات مبعثرة؛ المصفوفة كتلة واحدة متتالية يقرأها المعالج بكفاءة.</li>
    <li><strong>بلا حمل بايثون:</strong> الحلقة تفسّر كل خطوة؛ NumPy ينفّذ العملية في كود مُصرَّف.</li>
    <li>النتيجة: جمع مليون رقم أسرع بـ 10 إلى 50 مرة.</li>
</ul>

<h3>العملية المتّجهة: التفكير بلا حلقات</h3>

<p>هذا تحوّل ذهني مهم. بدل «مُرّ على كل سعر واضرب في سعر الصرف»، تكتب <code>prices_mad = prices_usd * 10.2</code> والمصفوفة كلها تتحوّل. معظم كود التحليل يصبح سلسلة عمليات متّجهة، لا حلقات.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>خلط الأنواع:</strong> <code>np.array([1, 2, "3"])</code> يحوّل كل شيء إلى نصّ. تأكّد أن مدخلاتك متجانسة.</li>
    <li><strong>توقّع أن <code>+</code> يدمج مثل القوائم:</strong> <code>arr1 + arr2</code> يجمع عنصراً بعنصر، لا يلصق.</li>
    <li><strong>تعديل الحجم:</strong> لا <code>append</code> فعّال؛ إذا احتجت النموّ الديناميكي، اجمع في قائمة ثم حوّلها مرة واحدة.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>المصفوفة: نوع موحّد، حجم ثابت، عمليات متّجهة</li>
    <li>أسرع من القوائم بسبب الذاكرة المتراصّة والتنفيذ المُصرَّف</li>
    <li>العملية المتّجهة تستبدل الحلقة: <code>arr * 2</code> بدل <code>for</code></li>
    <li>الاصطلاح: <code>import numpy as np</code></li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>لديك قائمة درجات حرارة بالفهرنهايت. حوّلها إلى مصفوفة NumPy، ثم إلى مئوية بالمعادلة <code>(f - 32) * 5 / 9</code> في سطر واحد بلا حلقة. قارن عدد الأسطر مع الحل بحلقة <code>for</code>.</p>
`,
            en: `
<p>In the previous lesson we computed sums and averages with <code>for</code> loops. They work fine on dozens of values, but real analysis works on millions of rows, and there the loop becomes very slow. <strong>NumPy</strong> is the answer: a library that stores numbers in one contiguous block in memory and applies operations to all values at once at C speed.</p>

<h3>The array (ndarray): the core type</h3>

<p>An array looks like a list on the surface, but with three essential differences: all its elements are of <strong>one type</strong> (all floats, say), its size is <strong>fixed</strong> after creation, and it supports <strong>vectorized</strong> operations: <code>arr * 2</code> multiplies every element by 2 with no loop.</p>

<h3>Why is it faster?</h3>

<ul>
    <li><strong>Contiguous memory:</strong> a Python list is scattered pointers; an array is one continuous block the CPU reads efficiently.</li>
    <li><strong>No Python overhead:</strong> a loop interprets every step; NumPy runs the operation in compiled code.</li>
    <li>Result: summing a million numbers is 10 to 50&times; faster.</li>
</ul>

<h3>The vectorized operation: thinking without loops</h3>

<p>This is an important mental shift. Instead of "walk every price and multiply by the exchange rate", you write <code>prices_mad = prices_usd * 10.2</code> and the whole array converts. Most analysis code becomes a chain of vectorized operations, not loops.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Mixing types:</strong> <code>np.array([1, 2, "3"])</code> converts everything to string. Make sure your inputs are homogeneous.</li>
    <li><strong>Expecting <code>+</code> to concatenate like lists:</strong> <code>arr1 + arr2</code> adds element by element, it doesn't join.</li>
    <li><strong>Resizing:</strong> there is no efficient <code>append</code>; if you need dynamic growth, collect into a list then convert once.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>Array: uniform type, fixed size, vectorized operations</li>
    <li>Faster than lists due to contiguous memory and compiled execution</li>
    <li>The vectorized operation replaces the loop: <code>arr * 2</code> instead of <code>for</code></li>
    <li>Convention: <code>import numpy as np</code></li>
</ul>

<h3>Exercise</h3>

<p>You have a list of temperatures in Fahrenheit. Convert it to a NumPy array, then to Celsius with <code>(f - 32) * 5 / 9</code> in one line with no loop. Compare the line count with the <code>for</code>-loop solution.</p>
`
        },
        code: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># قائمة عادية مقابل مصفوفة</span>
prices_usd = np.<span class="fn">array</span>([12.0, 8.5, 30.0, 26.0])

<span class="cm"># عملية متّجهة — بلا حلقة، كل العناصر دفعة واحدة</span>
prices_mad = prices_usd * 10.2
<span class="fn">print</span>(prices_mad)          <span class="cm"># [122.4  86.7 306.  265.2]</span>

<span class="cm"># الحساب على المصفوفة كلها</span>
<span class="fn">print</span>(prices_mad.<span class="fn">sum</span>())    <span class="cm"># 780.3</span>
<span class="fn">print</span>(prices_mad.<span class="fn">mean</span>())   <span class="cm"># 195.075</span>

<span class="cm"># + يجمع عنصراً بعنصر، لا يلصق</span>
a = np.<span class="fn">array</span>([1, 2, 3])
b = np.<span class="fn">array</span>([10, 20, 30])
<span class="fn">print</span>(a + b)              <span class="cm"># [11 22 33]</span>

<span class="cm"># خلط الأنواع يحوّل كل شيء إلى نصّ — انتبه</span>
<span class="fn">print</span>(np.<span class="fn">array</span>([1, 2, <span class="st">"3"</span>]).dtype)   <span class="cm"># <U21  (نصّ!)</span>`,
        quiz: {
            q: {
                ar: "ما ناتج <code>np.array([1, 2, 3]) + np.array([10, 20, 30])</code>؟",
                en: "What is <code>np.array([1, 2, 3]) + np.array([10, 20, 30])</code>?"
            },
            options: {
                ar: [
                    "[1, 2, 3, 10, 20, 30]",
                    "[11, 22, 33]",
                    "66",
                    "خطأ لأن الأحجام مختلفة"
                ],
                en: [
                    "[1, 2, 3, 10, 20, 30]",
                    "[11, 22, 33]",
                    "66",
                    "An error because the sizes differ"
                ]
            },
            correct: 1,
            explanation: {
                ar: "على عكس القوائم، <code>+</code> في NumPy عملية متّجهة: يجمع كل عنصر مع نظيره في الموضع نفسه. لدمج مصفوفتين نستخدم <code>np.concatenate</code>.",
                en: "Unlike lists, <code>+</code> in NumPy is vectorized: it adds each element to its counterpart at the same position. To join two arrays we use <code>np.concatenate</code>."
            }
        }
    },

    {
        title: {
            ar: "إنشاء المصفوفات: shape وdtype وreshape",
            en: "Creating arrays: shape, dtype and reshape"
        },
        body: {
            ar: `
<p>الجدول في التحليل مصفوفة ثنائية الأبعاد: صفوف وأعمدة. لتتعامل معها بثقة تحتاج أن تقرأ ثلاث خصائص فوراً: <strong>الشكل</strong> (كم صفاً وعموداً)، <strong>النوع</strong> (أعداد صحيحة أم عشرية)، و<strong>عدد الأبعاد</strong>.</p>

<h3>طرق الإنشاء الشائعة</h3>

<ul>
    <li><code>np.array([[1, 2], [3, 4]])</code> — من قائمة قوائم (كل قائمة صفّ).</li>
    <li><code>np.zeros((3, 4))</code> و<code>np.ones((2, 5))</code> — مصفوفة مملوءة بصفر أو واحد بالشكل المطلوب.</li>
    <li><code>np.arange(0, 10, 2)</code> — مثل <code>range</code>: <code>[0 2 4 6 8]</code>.</li>
    <li><code>np.linspace(0, 1, 5)</code> — خمس قيم موزّعة بانتظام بين 0 و1.</li>
</ul>

<h3>shape: البطاقة التعريفية</h3>

<p><code>arr.shape</code> يعطي زوجاً مثل <code>(100, 3)</code>: 100 صفّ، 3 أعمدة. <code>arr.ndim</code> عدد الأبعاد (1 لمتّجه، 2 لجدول). <code>arr.size</code> إجمالي العناصر (300). أول شيء تفعله بأي مصفوفة جديدة: اطبع <code>shape</code>.</p>

<h3>dtype: النوع يحدّد السلوك</h3>

<p><code>arr.dtype</code> قد يكون <code>int64</code> أو <code>float64</code> أو <code>bool</code>. مهمّ لأن القسمة على مصفوفة أعداد صحيحة قد تفاجئك، ولأن العمود المنطقي (<code>True/False</code>) هو أساس الفلترة لاحقاً. حوّل النوع بـ <code>arr.astype(float)</code>.</p>

<h3>reshape: نفس البيانات، شكل مختلف</h3>

<p><code>np.arange(12).reshape(3, 4)</code> يحوّل 12 رقماً إلى جدول 3×4. الشرط: حاصل ضرب الأبعاد الجديدة = عدد العناصر. <code>reshape(-1, 1)</code> يحوّل متّجهاً إلى عمود واحد — نمط شائع قبل بعض دوال التعلّم الآلي.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>الخلط بين <code>(3,)</code> و<code>(3, 1)</code></strong>: الأول متّجه أحادي، الثاني جدول بعمود واحد. تتصرّف الدوال معهما بشكل مختلف.</li>
    <li><strong>reshape بأبعاد غير متوافقة</strong>: <code>reshape(3, 5)</code> على 12 عنصراً يرمي خطأ.</li>
    <li><strong>افتراض float</strong>: <code>np.array([1, 2, 3])</code> نوعه <code>int</code>، و<code>arr / 2</code> قد لا يعطي ما تتوقّع في نُسخ قديمة.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>shape</code> (الصفوف، الأعمدة)، <code>ndim</code>، <code>size</code> — اقرأها أولاً</li>
    <li><code>dtype</code> يحدّد السلوك؛ حوّل بـ <code>.astype()</code></li>
    <li><code>zeros</code> / <code>ones</code> / <code>arange</code> / <code>linspace</code> لإنشاء سريع</li>
    <li><code>reshape</code> يغيّر الشكل بشرط تطابق عدد العناصر</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>أنشئ <code>np.arange(1, 25)</code> ثم أعد تشكيلها إلى جدول 4×6. اطبع <code>shape</code> و<code>dtype</code> و<code>ndim</code>. ثم حوّلها إلى <code>float</code> واقسمها على 2.</p>
`,
            en: `
<p>A table in analysis is a two-dimensional array: rows and columns. To work with it confidently you need to read three properties immediately: the <strong>shape</strong> (how many rows and columns), the <strong>type</strong> (integers or floats), and the <strong>number of dimensions</strong>.</p>

<h3>Common creation methods</h3>

<ul>
    <li><code>np.array([[1, 2], [3, 4]])</code> — from a list of lists (each list a row).</li>
    <li><code>np.zeros((3, 4))</code> and <code>np.ones((2, 5))</code> — an array filled with zeros or ones of the requested shape.</li>
    <li><code>np.arange(0, 10, 2)</code> — like <code>range</code>: <code>[0 2 4 6 8]</code>.</li>
    <li><code>np.linspace(0, 1, 5)</code> — five evenly spaced values between 0 and 1.</li>
</ul>

<h3>shape: the ID card</h3>

<p><code>arr.shape</code> gives a tuple like <code>(100, 3)</code>: 100 rows, 3 columns. <code>arr.ndim</code> the number of dimensions (1 for a vector, 2 for a table). <code>arr.size</code> the total element count (300). The first thing you do with any new array: print its <code>shape</code>.</p>

<h3>dtype: the type dictates behavior</h3>

<p><code>arr.dtype</code> may be <code>int64</code>, <code>float64</code> or <code>bool</code>. It matters because dividing an integer array can surprise you, and because the boolean column (<code>True/False</code>) is the basis of filtering later. Convert with <code>arr.astype(float)</code>.</p>

<h3>reshape: same data, different shape</h3>

<p><code>np.arange(12).reshape(3, 4)</code> turns 12 numbers into a 3&times;4 table. The condition: the product of the new dimensions = the element count. <code>reshape(-1, 1)</code> turns a vector into a single column — a common pattern before some machine-learning functions.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Confusing <code>(3,)</code> and <code>(3, 1)</code></strong>: the first is a 1-D vector, the second a table with one column. Functions treat them differently.</li>
    <li><strong>reshape with incompatible dimensions</strong>: <code>reshape(3, 5)</code> on 12 elements raises an error.</li>
    <li><strong>Assuming float</strong>: <code>np.array([1, 2, 3])</code> is <code>int</code>, and <code>arr / 2</code> may not give what you expect in old versions.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>shape</code> (rows, columns), <code>ndim</code>, <code>size</code> — read these first</li>
    <li><code>dtype</code> dictates behavior; convert with <code>.astype()</code></li>
    <li><code>zeros</code> / <code>ones</code> / <code>arange</code> / <code>linspace</code> for quick creation</li>
    <li><code>reshape</code> changes the shape provided the element count matches</li>
</ul>

<h3>Exercise</h3>

<p>Create <code>np.arange(1, 25)</code> then reshape it to a 4&times;6 table. Print its <code>shape</code>, <code>dtype</code> and <code>ndim</code>. Then convert it to <code>float</code> and divide by 2.</p>
`
        },
        code: `<span class="kw">import</span> numpy <span class="kw">as</span> np

grid = np.<span class="fn">arange</span>(12).<span class="fn">reshape</span>(3, 4)
<span class="fn">print</span>(grid)
<span class="cm"># [[ 0  1  2  3]</span>
<span class="cm">#  [ 4  5  6  7]</span>
<span class="cm">#  [ 8  9 10 11]]</span>

<span class="fn">print</span>(grid.shape)   <span class="cm"># (3, 4)</span>
<span class="fn">print</span>(grid.ndim)    <span class="cm"># 2</span>
<span class="fn">print</span>(grid.size)    <span class="cm"># 12</span>
<span class="fn">print</span>(grid.dtype)   <span class="cm"># int64</span>

<span class="cm"># نفس البيانات كعمود واحد (مفيد قبل نماذج sklearn)</span>
column = np.<span class="fn">arange</span>(5).<span class="fn">reshape</span>(-1, 1)
<span class="fn">print</span>(column.shape)   <span class="cm"># (5, 1)</span>

<span class="cm"># إنشاء سريع</span>
<span class="fn">print</span>(np.<span class="fn">zeros</span>((2, 3)))
<span class="fn">print</span>(np.<span class="fn">linspace</span>(0, 1, 5))   <span class="cm"># [0.   0.25 0.5  0.75 1.  ]</span>`,
        quiz: {
            q: {
                ar: "مصفوفة <code>shape</code> لها <code>(1000, 5)</code>. ماذا تعني؟",
                en: "An array's <code>shape</code> is <code>(1000, 5)</code>. What does that mean?"
            },
            options: {
                ar: [
                    "1000 عمود و5 صفوف",
                    "1000 صفّ و5 أعمدة",
                    "5000 قيمة في بُعد واحد",
                    "1000 مصفوفة كلٌّ من 5 أبعاد"
                ],
                en: [
                    "1000 columns and 5 rows",
                    "1000 rows and 5 columns",
                    "5000 values in one dimension",
                    "1000 arrays each of 5 dimensions"
                ]
            },
            correct: 1,
            explanation: {
                ar: "<code>shape</code> يقرأ (المحور 0، المحور 1) = (الصفوف، الأعمدة). فـ <code>(1000, 5)</code> يعني 1000 سجلّ (صفوف) لكلٍّ منها 5 خصائص (أعمدة) — الشكل النموذجي لجدول بيانات.",
                en: "<code>shape</code> reads as (axis 0, axis 1) = (rows, columns). So <code>(1000, 5)</code> means 1000 records (rows) each with 5 features (columns) — the standard shape of a data table."
            }
        }
    },

    {
        title: {
            ar: "الفهرسة والتقطيع في بُعدين",
            en: "Indexing and slicing in two dimensions"
        },
        body: {
            ar: `
<p>مع جدول ثنائي الأبعاد تحتاج أن تختار: صفّاً، عموداً، خلية واحدة، أو مستطيلاً منها. NumPy يوسّع صياغة القائمة <code>[start:stop]</code> إلى بُعدين مفصولين بفاصلة: <code>arr[الصفوف, الأعمدة]</code>.</p>

<h3>القاعدة: [صفوف, أعمدة]</h3>

<ul>
    <li><code>arr[0]</code> أو <code>arr[0, :]</code> — الصفّ الأول كاملاً.</li>
    <li><code>arr[:, 0]</code> — العمود الأول كاملاً (النقطتان تعني «كل الصفوف»).</li>
    <li><code>arr[2, 3]</code> — الخلية عند الصفّ 2، العمود 3.</li>
    <li><code>arr[0:3, 1:4]</code> — مستطيل: الصفوف 0–2، الأعمدة 1–3.</li>
</ul>

<h3>الفهرسة بقائمة مواضع</h3>

<p><code>arr[:, [0, 2]]</code> يختار العمودين 0 و2 فقط ويبني مصفوفة جديدة. مفيد لاختيار مجموعة أعمدة غير متجاورة (تشبه اختيار أعمدة في Pandas بالاسم).</p>

<h3>العرض مقابل النسخة — فخّ مهمّ</h3>

<p>التقطيع في NumPy يُرجع <strong>عرضاً</strong> (view) لا نسخة: <code>sub = arr[0:2, 0:2]; sub[0, 0] = 99</code> <em>يغيّر</em> <code>arr</code> الأصلية أيضاً. إذا أردت نسخة مستقلة استخدم <code>arr[0:2, 0:2].copy()</code>.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>نسيان الفاصلة:</strong> <code>arr[1][2]</code> يعمل لكن <code>arr[1, 2]</code> أسرع وأوضح للجداول.</li>
    <li><strong>الخلط بين المحاور:</strong> <code>arr[:, 0]</code> عمود، <code>arr[0, :]</code> صفّ — من السهل قلبهما.</li>
    <li><strong>تعديل عرض دون قصد</strong> فتتغيّر المصفوفة الأصلية بصمت.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>arr[صفوف, أعمدة]</code>؛ <code>:</code> تعني «الكل» على ذلك المحور</li>
    <li><code>arr[:, i]</code> عمود، <code>arr[i, :]</code> صفّ</li>
    <li>قائمة مواضع تختار أعمدة/صفوفاً غير متجاورة</li>
    <li>التقطيع عرض لا نسخة — استخدم <code>.copy()</code> عند الحاجة</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>أنشئ جدول 5×4 بـ <code>np.arange(20).reshape(5, 4)</code>. استخرج: العمود الأخير، الصفّ الثالث، الخلية عند (1, 2)، والمستطيل الذي يضمّ أول ثلاثة صفوف وأول عمودين. ثم انسخ المستطيل وغيّر خلية فيه وتأكّد أن الأصل لم يتغيّر.</p>
`,
            en: `
<p>With a two-dimensional table you need to select: a row, a column, a single cell, or a rectangle of them. NumPy extends the list syntax <code>[start:stop]</code> to two dimensions separated by a comma: <code>arr[rows, columns]</code>.</p>

<h3>The rule: [rows, columns]</h3>

<ul>
    <li><code>arr[0]</code> or <code>arr[0, :]</code> — the entire first row.</li>
    <li><code>arr[:, 0]</code> — the entire first column (the colon means "all rows").</li>
    <li><code>arr[2, 3]</code> — the cell at row 2, column 3.</li>
    <li><code>arr[0:3, 1:4]</code> — a rectangle: rows 0&ndash;2, columns 1&ndash;3.</li>
</ul>

<h3>Indexing with a list of positions</h3>

<p><code>arr[:, [0, 2]]</code> selects only columns 0 and 2 and builds a new array. Useful for selecting a set of non-adjacent columns (like selecting columns by name in Pandas).</p>

<h3>View vs. copy — an important trap</h3>

<p>Slicing in NumPy returns a <strong>view</strong>, not a copy: <code>sub = arr[0:2, 0:2]; sub[0, 0] = 99</code> <em>also</em> changes the original <code>arr</code>. If you want an independent copy use <code>arr[0:2, 0:2].copy()</code>.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Forgetting the comma:</strong> <code>arr[1][2]</code> works but <code>arr[1, 2]</code> is faster and clearer for tables.</li>
    <li><strong>Swapping axes:</strong> <code>arr[:, 0]</code> is a column, <code>arr[0, :]</code> a row — easy to flip.</li>
    <li><strong>Modifying a view unintentionally</strong> so the original array changes silently.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>arr[rows, columns]</code>; <code>:</code> means "all" on that axis</li>
    <li><code>arr[:, i]</code> is a column, <code>arr[i, :]</code> a row</li>
    <li>A list of positions selects non-adjacent columns/rows</li>
    <li>A slice is a view, not a copy — use <code>.copy()</code> when needed</li>
</ul>

<h3>Exercise</h3>

<p>Create a 5&times;4 table with <code>np.arange(20).reshape(5, 4)</code>. Extract: the last column, the third row, the cell at (1, 2), and the rectangle covering the first three rows and first two columns. Then copy the rectangle, change a cell in it, and confirm the original didn't change.</p>
`
        },
        code: `<span class="kw">import</span> numpy <span class="kw">as</span> np
arr = np.<span class="fn">arange</span>(20).<span class="fn">reshape</span>(5, 4)

<span class="fn">print</span>(arr[0])         <span class="cm"># [0 1 2 3]      الصفّ الأول</span>
<span class="fn">print</span>(arr[:, 0])      <span class="cm"># [0 4 8 12 16]  العمود الأول</span>
<span class="fn">print</span>(arr[2, 3])      <span class="cm"># 11             خلية</span>
<span class="fn">print</span>(arr[0:3, 1:3])  <span class="cm"># مستطيل: صفوف 0-2، أعمدة 1-2</span>

<span class="cm"># أعمدة غير متجاورة</span>
<span class="fn">print</span>(arr[:, [0, 3]])  <span class="cm"># العمودان الأول والأخير فقط</span>

<span class="cm"># فخّ العرض: التقطيع لا ينسخ</span>
sub = arr[0:2, 0:2]
sub[0, 0] = 99
<span class="fn">print</span>(arr[0, 0])      <span class="cm"># 99  ← الأصل تغيّر!</span>

<span class="cm"># الحلّ: نسخة مستقلة</span>
safe = arr[0:2, 0:2].<span class="fn">copy</span>()`,
        quiz: {
            q: {
                ar: "<code>sub = arr[0:3, 0:3]</code> ثم <code>sub[0, 0] = 0</code>. ماذا يحدث للمصفوفة <code>arr</code> الأصلية؟",
                en: "<code>sub = arr[0:3, 0:3]</code> then <code>sub[0, 0] = 0</code>. What happens to the original <code>arr</code>?"
            },
            options: {
                ar: [
                    "لا تتأثّر، لأن sub نسخة مستقلة",
                    "تتغيّر خليتها [0, 0] إلى 0، لأن التقطيع يُرجع عرضاً لا نسخة",
                    "ترمي خطأً",
                    "تُحذف كل قيمها"
                ],
                en: [
                    "It's unaffected, because sub is an independent copy",
                    "Its cell [0, 0] becomes 0, because slicing returns a view, not a copy",
                    "It raises an error",
                    "All its values are deleted"
                ]
            },
            correct: 1,
            explanation: {
                ar: "تقطيع NumPy يُرجع نافذة على البيانات نفسها لتوفير الذاكرة. الكتابة في العرض تكتب في الأصل. لعزل التعديلات استخدم <code>.copy()</code>.",
                en: "NumPy slicing returns a window onto the same data to save memory. Writing to the view writes to the original. To isolate changes use <code>.copy()</code>."
            }
        }
    },

    {
        title: {
            ar: "القناع المنطقي والفلترة",
            en: "Boolean masking and filtering"
        },
        body: {
            ar: `
<p>أكثر سؤال في التحليل: «أرِني الصفوف التي تحقّق شرطاً» — المبيعات فوق 1000، الطلاب الراسبون، أيام المطر. الأداة لذلك في NumPy هي <strong>القناع المنطقي</strong>: مصفوفة من <code>True/False</code> بنفس الطول، تستخدمها للاختيار.</p>

<h3>الخطوة 1: بناء القناع</h3>

<p>المقارنة على مصفوفة عملية متّجهة تُرجع قناعاً: <code>ages &gt;= 18</code> يعطي <code>[True, False, True, ...]</code>. كل عنصر نتيجة مقارنة القيمة المقابلة بالعتبة.</p>

<h3>الخطوة 2: تطبيق القناع</h3>

<p><code>arr[mask]</code> يُرجع القيم التي يقابلها <code>True</code> فقط. <code>ages[ages &gt;= 18]</code> = الأعمار البالغة. والأقوى: تطبيق قناع عمود على جدول كامل — <code>data[data[:, 0] &gt; 1000]</code> يُرجع الصفوف التي عمودها الأول فوق 1000.</p>

<h3>دمج الشروط</h3>

<p>استخدم <code>&amp;</code> (و)، <code>|</code> (أو)، <code>~</code> (نفي) — <strong>لا</strong> الكلمات <code>and/or</code>. وكل شرط بين قوسين: <code>(age &gt; 18) &amp; (city == "Casa")</code>. نسيان الأقواس خطأ شائع بسبب أولوية العوامل.</p>

<h3>العدّ والتجميع على القناع</h3>

<p><code>mask.sum()</code> يعدّ الـ <code>True</code> (لأن <code>True</code> = 1): «كم طالباً نجح؟». <code>mask.mean()</code> يعطي النسبة مباشرة: «ما نسبة النجاح؟». هذه من أكثر الحيل فائدة.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>استخدام <code>and</code> بدل <code>&amp;</code></strong> يرمي «truth value of an array is ambiguous».</li>
    <li><strong>نسيان الأقواس:</strong> <code>a &gt; 1 &amp; b &lt; 2</code> يُفسَّر خطأً — اكتب <code>(a &gt; 1) &amp; (b &lt; 2)</code>.</li>
    <li><strong>قناع بطول مختلف</strong> عن المصفوفة يرمي خطأً.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>المقارنة تبني قناعاً منطقياً بنفس الشكل</li>
    <li><code>arr[mask]</code> يختار حيث <code>True</code>؛ يعمل على صفوف الجدول أيضاً</li>
    <li>ادمج بـ <code>&amp;</code> <code>|</code> <code>~</code> وكل شرط بين قوسين</li>
    <li><code>mask.sum()</code> عدد، <code>mask.mean()</code> نسبة</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>مصفوفة درجات <code>scores = np.array([55, 80, 42, 90, 67, 38, 75])</code>. اطبع: الدرجات ≥ 60، عددها، نسبتها من المجموع، والدرجات بين 50 و80 (شرطان مدموجان).</p>
`,
            en: `
<p>The most common question in analysis: "show me the rows that meet a condition" — sales above 1000, failing students, rainy days. The tool for that in NumPy is the <strong>boolean mask</strong>: an array of <code>True/False</code> of the same length that you use to select.</p>

<h3>Step 1: build the mask</h3>

<p>A comparison on an array is a vectorized operation that returns a mask: <code>ages &gt;= 18</code> gives <code>[True, False, True, ...]</code>. Each element is the result of comparing the corresponding value to the threshold.</p>

<h3>Step 2: apply the mask</h3>

<p><code>arr[mask]</code> returns only the values where the mask is <code>True</code>. <code>ages[ages &gt;= 18]</code> = the adult ages. And more powerful: applying a column's mask to a whole table — <code>data[data[:, 0] &gt; 1000]</code> returns the rows whose first column is above 1000.</p>

<h3>Combining conditions</h3>

<p>Use <code>&amp;</code> (and), <code>|</code> (or), <code>~</code> (not) — <strong>not</strong> the words <code>and/or</code>. And wrap each condition in parentheses: <code>(age &gt; 18) &amp; (city == "Casa")</code>. Forgetting the parentheses is a common mistake because of operator precedence.</p>

<h3>Counting and aggregating on the mask</h3>

<p><code>mask.sum()</code> counts the <code>True</code>s (since <code>True</code> = 1): "how many students passed?". <code>mask.mean()</code> gives the ratio directly: "what is the pass rate?". These are among the most useful tricks.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Using <code>and</code> instead of <code>&amp;</code></strong> raises "truth value of an array is ambiguous".</li>
    <li><strong>Forgetting parentheses:</strong> <code>a &gt; 1 &amp; b &lt; 2</code> is misparsed — write <code>(a &gt; 1) &amp; (b &lt; 2)</code>.</li>
    <li><strong>A mask of a different length</strong> from the array raises an error.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>A comparison builds a boolean mask of the same shape</li>
    <li><code>arr[mask]</code> selects where <code>True</code>; also works on table rows</li>
    <li>Combine with <code>&amp;</code> <code>|</code> <code>~</code> and parenthesize each condition</li>
    <li><code>mask.sum()</code> a count, <code>mask.mean()</code> a ratio</li>
</ul>

<h3>Exercise</h3>

<p>A scores array <code>scores = np.array([55, 80, 42, 90, 67, 38, 75])</code>. Print: the scores &ge; 60, their count, their ratio of the total, and the scores between 50 and 80 (two combined conditions).</p>
`
        },
        code: `<span class="kw">import</span> numpy <span class="kw">as</span> np
scores = np.<span class="fn">array</span>([55, 80, 42, 90, 67, 38, 75])

mask = scores &gt;= 60
<span class="fn">print</span>(mask)              <span class="cm"># [False  True False  True  True False  True]</span>
<span class="fn">print</span>(scores[mask])      <span class="cm"># [80 90 67 75]   الناجحون</span>

<span class="fn">print</span>(mask.<span class="fn">sum</span>())       <span class="cm"># 4      كم ناجحاً</span>
<span class="fn">print</span>(mask.<span class="fn">mean</span>())      <span class="cm"># 0.571  نسبة النجاح</span>

<span class="cm"># شرطان مدموجان — أقواس حول كلٍّ، و & لا and</span>
mid = scores[(scores &gt;= 50) &amp; (scores &lt;= 80)]
<span class="fn">print</span>(mid)               <span class="cm"># [55 80 67 75]</span>

<span class="cm"># تطبيق قناع عمود على جدول كامل</span>
data = np.<span class="fn">array</span>([[1200, 3], [800, 5], [1500, 2]])
<span class="fn">print</span>(data[data[:, 0] &gt; 1000])   <span class="cm"># [[1200 3] [1500 2]]</span>`,
        quiz: {
            q: {
                ar: "قناع <code>passed = grades &gt;= 50</code>. ماذا يعطي <code>passed.mean()</code>؟",
                en: "A mask <code>passed = grades &gt;= 50</code>. What does <code>passed.mean()</code> give?"
            },
            options: {
                ar: [
                    "متوسط الدرجات",
                    "عدد الطلاب الناجحين",
                    "نسبة الطلاب الناجحين (بين 0 و1)",
                    "أعلى درجة"
                ],
                en: [
                    "The average grade",
                    "The number of students who passed",
                    "The proportion of students who passed (between 0 and 1)",
                    "The highest grade"
                ]
            },
            correct: 2,
            explanation: {
                ar: "<code>True</code> يساوي 1 و<code>False</code> يساوي 0، فمتوسط القناع = (عدد الـ True) ÷ (العدد الكلّي) = النسبة. <code>passed.sum()</code> يعطي العدد، و<code>passed.mean()</code> يعطي النسبة.",
                en: "<code>True</code> equals 1 and <code>False</code> equals 0, so the mask's mean = (count of True) ÷ (total count) = the proportion. <code>passed.sum()</code> gives the count, <code>passed.mean()</code> gives the ratio."
            }
        }
    },

    {
        title: {
            ar: "العمليات المتّجهة والبثّ (Broadcasting)",
            en: "Vectorized operations and broadcasting"
        },
        body: {
            ar: `
<p>رأينا <code>arr * 2</code> يضرب كل عنصر. لكن ماذا لو أردت طرح <em>متوسط كل عمود</em> من عموده، أو ضرب كل صفّ في وزن مختلف؟ هنا يدخل <strong>البثّ</strong> (broadcasting): قواعد تسمح لـ NumPy بدمج مصفوفتين مختلفتي الشكل دون كتابة حلقات.</p>

<h3>الحالة البسيطة: مصفوفة مع رقم</h3>

<p><code>arr + 10</code> — NumPy «يبثّ» الرقم 10 ليقابل كل عنصر. هذا بثّ أيضاً، أبسط أشكاله.</p>

<h3>مصفوفة مع متّجه</h3>

<p>جدول <code>(100, 3)</code> ومتّجه <code>(3,)</code>: <code>data - column_means</code> يطرح كل قيمة في المتّجه من العمود المقابل، لكل الصفوف. هذا بالضبط ما تفعله لتوحيد البيانات (تمركزها حول الصفر) قبل النمذجة.</p>

<h3>قاعدة البثّ</h3>

<p>يقارن NumPy الأشكال من اليمين. البُعدان متوافقان إذا كانا متساويين أو أحدهما <code>1</code>. <code>(100, 3)</code> مع <code>(3,)</code> → توافق (يُعامَل المتّجه كـ <code>(1, 3)</code>). <code>(100, 3)</code> مع <code>(100, 1)</code> → توافق أيضاً: كل صفّ يُضرب في قيمته الخاصة.</p>

<h3>لماذا يهمّ؟</h3>

<p>التوحيد، الترجيح، تطبيع الصفوف كي يكون مجموعها 1، حساب مصفوفة المسافات — كلها بثّ. إتقانه يعني كتابة تحويلات كاملة في سطر بدل حلقات متداخلة.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>خطأ الشكل:</strong> <code>(100, 3)</code> مع <code>(100,)</code> يفشل — تحتاج <code>(100, 1)</code>. استخدم <code>vec.reshape(-1, 1)</code>.</li>
    <li><strong>بثّ غير مقصود:</strong> شكلان «متوافقان» رياضياً لكن النتيجة ليست ما تريد. اطبع <code>result.shape</code> للتأكّد.</li>
    <li><strong>الخلط بين المحاور</strong> عند طرح متوسط الصفوف مقابل متوسط الأعمدة.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>البثّ يدمج أشكالاً مختلفة بلا حلقات</li>
    <li>القاعدة: من اليمين، البُعدان متوافقان لو تساويا أو كان أحدهما 1</li>
    <li>طرح متوسط الأعمدة: <code>data - data.mean(axis=0)</code></li>
    <li>لترجيح الصفوف: حوّل المتّجه إلى عمود بـ <code>reshape(-1, 1)</code></li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>جدول <code>data</code> شكله <code>(4, 3)</code> يمثّل 4 طلاب و3 اختبارات. اطرح متوسط كل اختبار من عموده (تمركز)، ثم اضرب كل طالب (صفّ) في وزن من <code>[1.0, 1.2, 0.8, 1.1]</code>. اطبع <code>shape</code> بعد كل خطوة.</p>
`,
            en: `
<p>We saw <code>arr * 2</code> multiply every element. But what if you want to subtract <em>each column's mean</em> from that column, or multiply each row by a different weight? This is where <strong>broadcasting</strong> comes in: rules that let NumPy combine two arrays of different shape without writing loops.</p>

<h3>The simple case: an array with a scalar</h3>

<p><code>arr + 10</code> — NumPy "broadcasts" the number 10 to meet every element. This is broadcasting too, in its simplest form.</p>

<h3>An array with a vector</h3>

<p>A <code>(100, 3)</code> table and a <code>(3,)</code> vector: <code>data - column_means</code> subtracts each value in the vector from the corresponding column, for all rows. This is exactly what you do to standardize data (center it around zero) before modeling.</p>

<h3>The broadcasting rule</h3>

<p>NumPy compares shapes from the right. Two dimensions are compatible if they're equal or one of them is <code>1</code>. <code>(100, 3)</code> with <code>(3,)</code> → compatible (the vector is treated as <code>(1, 3)</code>). <code>(100, 3)</code> with <code>(100, 1)</code> → also compatible: each row is multiplied by its own value.</p>

<h3>Why does it matter?</h3>

<p>Standardization, weighting, normalizing rows to sum to 1, computing a distance matrix — all broadcasting. Mastering it means writing entire transformations in one line instead of nested loops.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Shape error:</strong> <code>(100, 3)</code> with <code>(100,)</code> fails — you need <code>(100, 1)</code>. Use <code>vec.reshape(-1, 1)</code>.</li>
    <li><strong>Unintended broadcast:</strong> two shapes are "compatible" mathematically but the result isn't what you want. Print <code>result.shape</code> to check.</li>
    <li><strong>Swapping axes</strong> when subtracting the row mean vs. the column mean.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>Broadcasting combines different shapes with no loops</li>
    <li>The rule: from the right, two dims are compatible if equal or one is 1</li>
    <li>Subtract column means: <code>data - data.mean(axis=0)</code></li>
    <li>To weight rows: turn the vector into a column with <code>reshape(-1, 1)</code></li>
</ul>

<h3>Exercise</h3>

<p>A <code>data</code> table of shape <code>(4, 3)</code> representing 4 students and 3 tests. Subtract each test's mean from its column (centering), then multiply each student (row) by a weight from <code>[1.0, 1.2, 0.8, 1.1]</code>. Print the <code>shape</code> after each step.</p>
`
        },
        code: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># 4 طلاب × 3 اختبارات</span>
data = np.<span class="fn">array</span>([
    [12, 15, 10],
    [18, 14, 16],
    [ 9, 11, 13],
    [20, 19, 17],
], dtype=<span class="fn">float</span>)

<span class="cm"># متوسط كل اختبار (عمود) — الشكل (3,)</span>
col_means = data.<span class="fn">mean</span>(axis=0)
<span class="fn">print</span>(col_means)          <span class="cm"># [14.75 14.75 14.  ]</span>

<span class="cm"># البثّ: يُطرح المتّجه (3,) من كل صفّ في (4,3)</span>
centered = data - col_means
<span class="fn">print</span>(centered.shape)      <span class="cm"># (4, 3)</span>

<span class="cm"># ترجيح كل طالب (صفّ) — نحوّل الأوزان إلى عمود (4,1)</span>
weights = np.<span class="fn">array</span>([1.0, 1.2, 0.8, 1.1]).<span class="fn">reshape</span>(-1, 1)
weighted = centered * weights
<span class="fn">print</span>(weighted.shape)      <span class="cm"># (4, 3)</span>`,
        quiz: {
            q: {
                ar: "جدول شكله <code>(50, 4)</code>. أي متّجه يمكن طرحه منه مباشرة بالبثّ لطرح متوسط كل عمود؟",
                en: "A table of shape <code>(50, 4)</code>. Which vector can be subtracted from it directly by broadcasting to subtract each column's mean?"
            },
            options: {
                ar: [
                    "متّجه شكله (50,)",
                    "متّجه شكله (4,)",
                    "متّجه شكله (50, 50)",
                    "رقم واحد فقط"
                ],
                en: [
                    "A vector of shape (50,)",
                    "A vector of shape (4,)",
                    "A vector of shape (50, 50)",
                    "Only a single number"
                ]
            },
            correct: 1,
            explanation: {
                ar: "متوسط الأعمدة (<code>data.mean(axis=0)</code>) شكله <code>(4,)</code> — قيمة لكل عمود. البثّ يقارن من اليمين: 4 مع 4 متوافق، ويُعامَل المتّجه كـ <code>(1, 4)</code> فيُطرح من كل الصفوف. متّجه <code>(50,)</code> يفشل ويحتاج <code>reshape(-1, 1)</code>.",
                en: "The column means (<code>data.mean(axis=0)</code>) have shape <code>(4,)</code> — one value per column. Broadcasting compares from the right: 4 with 4 is compatible, and the vector is treated as <code>(1, 4)</code> so it's subtracted from every row. A <code>(50,)</code> vector fails and needs <code>reshape(-1, 1)</code>."
            }
        }
    },

    {
        title: {
            ar: "الإحصاء على المحاور (axis) + تمرين مُصغّر",
            en: "Statistics along axes + mini exercise"
        },
        body: {
            ar: `
<p>لديك جدول مبيعات: صفوف = أيام، أعمدة = فروع. تسأل: «مجموع كل فرع» و«مجموع كل يوم». نفس الدالة <code>sum</code>، لكن الفرق كلّه في معامل واحد: <strong><code>axis</code></strong>.</p>

<h3>ما معنى axis؟</h3>

<ul>
    <li><code>axis=0</code>: «انهار عبر الصفوف» → نتيجة لكل <strong>عمود</strong>. مجموع كل فرع.</li>
    <li><code>axis=1</code>: «انهار عبر الأعمدة» → نتيجة لكل <strong>صفّ</strong>. مجموع كل يوم.</li>
    <li>بلا <code>axis</code>: رقم واحد لكل الجدول.</li>
</ul>

<p>حيلة للتذكّر: <code>axis</code> هو المحور الذي <em>يختفي</em>. <code>data.sum(axis=0)</code> على شكل <code>(30, 5)</code> يُرجع شكل <code>(5,)</code> — البُعد 0 اختفى.</p>

<h3>الدوال المتاحة</h3>

<p><code>sum</code>، <code>mean</code>، <code>min</code>، <code>max</code>، <code>std</code> (الانحراف المعياري)، <code>argmax</code> (موضع القيمة العظمى)، <code>cumsum</code> (المجموع التراكمي). كلها تقبل <code>axis</code>.</p>

<h3>مثال كامل</h3>

<p><code>sales.mean(axis=0)</code> متوسط كل فرع. <code>sales.sum(axis=1)</code> إجمالي كل يوم. <code>sales.sum(axis=1).argmax()</code> رقم اليوم الأعلى مبيعاً. ثلاثة أسئلة تحليلية في ثلاثة أسطر بلا حلقة.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>قلب المحور:</strong> تريد «متوسط كل طالب» فتكتب <code>axis=0</code> وتحصل على «متوسط كل اختبار». تذكّر: المحور المختفي.</li>
    <li><strong>نسيان <code>axis</code></strong> فتحصل على رقم واحد بدل متّجه.</li>
    <li><strong><code>std</code> السكانية مقابل العيّنية:</strong> NumPy الافتراضي يقسم على n؛ للعيّنة استخدم <code>ddof=1</code>.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>axis=0</code> → نتيجة لكل عمود؛ <code>axis=1</code> → لكل صفّ</li>
    <li><code>axis</code> هو المحور الذي يختفي من الشكل</li>
    <li><code>argmax</code> يعطي الموضع لا القيمة</li>
    <li>هذا يختم NumPy: أنت الآن تحسب على جداول بلا حلقات</li>
</ul>

<h3>تمرين مُصغّر (نهاية المستوى)</h3>

<p>جدول <code>weather</code> شكله <code>(7, 3)</code>: 7 أيام، الأعمدة [حرارة، رطوبة، رياح]. احسب: متوسط كل عمود، أحرّ يوم (رقمه)، الأيام التي تجاوزت حرارتها المتوسط (قناع)، وعددها. اكتب كل جواب في سطر واحد.</p>
`,
            en: `
<p>You have a sales table: rows = days, columns = branches. You ask: "the total for each branch" and "the total for each day". Same function <code>sum</code>, but the whole difference is in one parameter: <strong><code>axis</code></strong>.</p>

<h3>What does axis mean?</h3>

<ul>
    <li><code>axis=0</code>: "collapse down the rows" → a result per <strong>column</strong>. The total for each branch.</li>
    <li><code>axis=1</code>: "collapse across the columns" → a result per <strong>row</strong>. The total for each day.</li>
    <li>No <code>axis</code>: a single number for the whole table.</li>
</ul>

<p>Memory trick: <code>axis</code> is the axis that <em>disappears</em>. <code>data.sum(axis=0)</code> on a <code>(30, 5)</code> shape returns shape <code>(5,)</code> — dimension 0 is gone.</p>

<h3>Available functions</h3>

<p><code>sum</code>, <code>mean</code>, <code>min</code>, <code>max</code>, <code>std</code> (standard deviation), <code>argmax</code> (position of the maximum), <code>cumsum</code> (cumulative sum). All accept <code>axis</code>.</p>

<h3>A full example</h3>

<p><code>sales.mean(axis=0)</code> the mean per branch. <code>sales.sum(axis=1)</code> the total per day. <code>sales.sum(axis=1).argmax()</code> the number of the best-selling day. Three analytical questions in three lines with no loop.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Flipping the axis:</strong> you want "the mean per student" so you write <code>axis=0</code> and get "the mean per test". Remember: the disappearing axis.</li>
    <li><strong>Forgetting <code>axis</code></strong> so you get a single number instead of a vector.</li>
    <li><strong>Population vs. sample <code>std</code>:</strong> NumPy's default divides by n; for a sample use <code>ddof=1</code>.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>axis=0</code> → a result per column; <code>axis=1</code> → per row</li>
    <li><code>axis</code> is the axis that disappears from the shape</li>
    <li><code>argmax</code> gives the position, not the value</li>
    <li>This closes NumPy: you now compute on tables with no loops</li>
</ul>

<h3>Mini exercise (end of module)</h3>

<p>A <code>weather</code> table of shape <code>(7, 3)</code>: 7 days, columns [temp, humidity, wind]. Compute: the mean of each column, the hottest day (its number), the days whose temperature exceeded the mean (a mask), and their count. Write each answer in one line.</p>
`
        },
        code: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># 7 أيام × 3 فروع</span>
sales = np.<span class="fn">array</span>([
    [120, 90, 60], [100, 80, 75], [140, 95, 50], [110, 70, 80],
    [160, 100, 65], [130, 85, 70], [ 90, 60, 55],
])

<span class="cm"># axis=0: ينهار الصفوف → نتيجة لكل فرع (عمود)</span>
<span class="fn">print</span>(sales.<span class="fn">sum</span>(axis=0))    <span class="cm"># [850 580 455]  إجمالي كل فرع</span>

<span class="cm"># axis=1: ينهار الأعمدة → نتيجة لكل يوم (صفّ)</span>
daily = sales.<span class="fn">sum</span>(axis=1)
<span class="fn">print</span>(daily)               <span class="cm"># [270 255 285 260 325 285 205]</span>

<span class="cm"># اليوم الأعلى مبيعاً (الموضع لا القيمة)</span>
<span class="fn">print</span>(daily.<span class="fn">argmax</span>())      <span class="cm"># 4  → اليوم الخامس</span>

<span class="cm"># الأيام فوق المتوسط اليومي</span>
above = daily &gt; daily.<span class="fn">mean</span>()
<span class="fn">print</span>(above.<span class="fn">sum</span>())        <span class="cm"># 3  أيام فوق المتوسط</span>`,
        quiz: {
            q: {
                ar: "جدول درجات شكله <code>(30, 4)</code>: 30 طالباً، 4 مواد. كيف تحسب متوسط كل طالب؟",
                en: "A grades table of shape <code>(30, 4)</code>: 30 students, 4 subjects. How do you compute each student's mean?"
            },
            options: {
                ar: [
                    "grades.mean(axis=0)",
                    "grades.mean(axis=1)",
                    "grades.mean()",
                    "grades.mean(axis=2)"
                ],
                en: [
                    "grades.mean(axis=0)",
                    "grades.mean(axis=1)",
                    "grades.mean()",
                    "grades.mean(axis=2)"
                ]
            },
            correct: 1,
            explanation: {
                ar: "الطالب صفّ، والمتوسط يجب أن يبقى لكل صفّ. <code>axis=1</code> ينهار الأعمدة (المواد الأربع) ويُبقي بُعد الصفوف، فالنتيجة شكلها <code>(30,)</code> — متوسط لكل طالب. <code>axis=0</code> يعطي متوسط كل مادة.",
                en: "A student is a row, and the mean must stay per row. <code>axis=1</code> collapses the columns (the four subjects) and keeps the row dimension, so the result has shape <code>(30,)</code> — one mean per student. <code>axis=0</code> gives the mean per subject."
            }
        }
    }

];
