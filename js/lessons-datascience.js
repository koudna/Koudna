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
        code: { ar: `<span class="cm"># تحليل مصغّر بلا أي مكتبة: لماذا انخفض المتوسط؟</span>
sales_this_month = [240, 180, 0, 0, 0, 320, 210]   <span class="cm"># ثلاثة أيام بصفر مبيعات</span>
sales_last_month = [240, 180, 300, 260, 280, 320, 210]

<span class="kw">def</span> <span class="fn">average</span>(values):
    <span class="kw">return</span> <span class="fn">sum</span>(values) / <span class="fn">len</span>(values)

<span class="fn">print</span>(<span class="st">"متوسط هذا الشهر:"</span>, <span class="fn">average</span>(sales_this_month))   <span class="cm"># 178.5</span>
<span class="fn">print</span>(<span class="st">"متوسط الشهر الماضي:"</span>, <span class="fn">average</span>(sales_last_month))  <span class="cm"># 255.7</span>

<span class="cm"># السؤال الحقيقي ليس "كم انخفض؟" بل "أين ومتى؟"</span>
zero_days = [i <span class="kw">for</span> i, v <span class="kw">in</span> <span class="fn">enumerate</span>(sales_this_month) <span class="kw">if</span> v == 0]
<span class="fn">print</span>(<span class="st">"أيام بلا مبيعات:"</span>, zero_days)   <span class="cm"># [2, 3, 4]</span>`, en: `<span class="cm"># A tiny analysis with no library: why did the average drop?</span>
sales_this_month = [240, 180, 0, 0, 0, 320, 210]   <span class="cm"># three days with zero sales</span>
sales_last_month = [240, 180, 300, 260, 280, 320, 210]

<span class="kw">def</span> <span class="fn">average</span>(values):
    <span class="kw">return</span> <span class="fn">sum</span>(values) / <span class="fn">len</span>(values)

<span class="fn">print</span>(<span class="st">"This month's average:"</span>, <span class="fn">average</span>(sales_this_month))   <span class="cm"># 178.5</span>
<span class="fn">print</span>(<span class="st">"Last month's average:"</span>, <span class="fn">average</span>(sales_last_month))  <span class="cm"># 255.7</span>

<span class="cm"># The real question isn't "how much did it drop?" but "where and when?"</span>
zero_days = [i <span class="kw">for</span> i, v <span class="kw">in</span> <span class="fn">enumerate</span>(sales_this_month) <span class="kw">if</span> v == 0]
<span class="fn">print</span>(<span class="st">"Days with no sales:"</span>, zero_days)   <span class="cm"># [2, 3, 4]</span>` },
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
        code: { ar: `<span class="cm"># خلية 1 — تُشغَّل مرة واحدة</span>
temperatures = [22, 25, 19, 30, 28, 24, 21]

<span class="cm"># خلية 2 — جرّب أفكاراً بلا إعادة تعريف القائمة</span>
average = <span class="fn">sum</span>(temperatures) / <span class="fn">len</span>(temperatures)
<span class="fn">print</span>(<span class="st">f"المتوسط: {average:.1f}"</span>)

<span class="cm"># خلية 3 — تعتمد على ما سبق</span>
hottest = <span class="fn">max</span>(temperatures)
coldest = <span class="fn">min</span>(temperatures)
<span class="fn">print</span>(<span class="st">f"المدى: من {coldest} إلى {hottest}"</span>)

<span class="cm"># لو غيّرت temperatures في خلية 1 وأعدت تشغيل 2 و3 فقط،</span>
<span class="cm"># ستتحدّث النتائج — هذه قوة الدفتر</span>`, en: `<span class="cm"># Cell 1 — runs once</span>
temperatures = [22, 25, 19, 30, 28, 24, 21]

<span class="cm"># Cell 2 — try ideas without redefining the list</span>
average = <span class="fn">sum</span>(temperatures) / <span class="fn">len</span>(temperatures)
<span class="fn">print</span>(<span class="st">f"Average: {average:.1f}"</span>)

<span class="cm"># Cell 3 — depends on what came before</span>
hottest = <span class="fn">max</span>(temperatures)
coldest = <span class="fn">min</span>(temperatures)
<span class="fn">print</span>(<span class="st">f"Range: from {coldest} to {hottest}"</span>)

<span class="cm"># If you changed temperatures in cell 1 and only reran 2 and 3,</span>
<span class="cm"># the results would update — that's the power of the notebook</span>` },
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
        code: { ar: `<span class="cm"># قائمة: صفّ من القيم، الوصول بالموضع</span>
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
<span class="fn">print</span>(total_revenue)          <span class="cm"># 720</span>`, en: `<span class="cm"># List: a row of values, accessed by position</span>
prices = [240, 180, 300, 260]
<span class="fn">print</span>(prices[0], prices[-1])   <span class="cm"># 240  260</span>
<span class="fn">print</span>(prices[1:3])           <span class="cm"># [180, 300]</span>

<span class="cm"># Dict: a single meaningful row</span>
order = {<span class="st">"id"</span>: 1042, <span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"total"</span>: 240}
<span class="fn">print</span>(order[<span class="st">"city"</span>])            <span class="cm"># Casablanca</span>
<span class="fn">print</span>(order.<span class="fn">get</span>(<span class="st">"discount"</span>, 0))  <span class="cm"># 0  (missing key — no error)</span>

<span class="cm"># A full table = a list of dicts</span>
orders = [
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"total"</span>: 240},
    {<span class="st">"city"</span>: <span class="st">"Rabat"</span>,      <span class="st">"total"</span>: 180},
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"total"</span>: 300},
]
total_revenue = <span class="fn">sum</span>(o[<span class="st">"total"</span>] <span class="kw">for</span> o <span class="kw">in</span> orders)
<span class="fn">print</span>(total_revenue)          <span class="cm"># 720</span>` },
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
        code: { ar: `sales = [
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
<span class="cm"># Rabat: 1,800 درهم</span>`, en: `sales = [
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"amount"</span>: 2400},
    {<span class="st">"city"</span>: <span class="st">"Rabat"</span>,      <span class="st">"amount"</span>: 1800},
    {<span class="st">"city"</span>: <span class="st">"Casablanca"</span>, <span class="st">"amount"</span>: 3100},
]

<span class="kw">def</span> <span class="fn">revenue_by_city</span>(records):
    <span class="cm"># the accumulator pattern inside a dict</span>
    totals = {}
    <span class="kw">for</span> r <span class="kw">in</span> records:
        city = r[<span class="st">"city"</span>]
        totals[city] = totals.<span class="fn">get</span>(city, 0) + r[<span class="st">"amount"</span>]
    <span class="kw">return</span> totals

result = <span class="fn">revenue_by_city</span>(sales)

<span class="kw">for</span> city, total <span class="kw">in</span> result.<span class="fn">items</span>():
    <span class="fn">print</span>(<span class="st">f"{city}: {total:,.0f} MAD"</span>)
<span class="cm"># Casablanca: 5,500 MAD</span>
<span class="cm"># Rabat: 1,800 MAD</span>` },
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
        code: { ar: `<span class="cm"># نفس القيمة، تفسير مختلف حسب النوع</span>

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
<span class="fn">print</span>(ratings)   <span class="cm"># ['ضعيف', 'جيد', 'جيد', 'ممتاز']  ✓</span>`, en: `<span class="cm"># Same value, different interpretation depending on the type</span>

<span class="cm"># Quantitative — the average is meaningful</span>
totals = [240, 180, 300, 260, 280]
<span class="fn">print</span>(<span class="fn">sum</span>(totals) / <span class="fn">len</span>(totals))     <span class="cm"># 252.0  ✓ useful</span>

<span class="cm"># Categorical — we count frequency, not average</span>
cities = [<span class="st">"Casa"</span>, <span class="st">"Rabat"</span>, <span class="st">"Casa"</span>, <span class="st">"Casa"</span>, <span class="st">"Fes"</span>]
counts = {}
<span class="kw">for</span> c <span class="kw">in</span> cities:
    counts[c] = counts.<span class="fn">get</span>(c, 0) + 1
<span class="fn">print</span>(counts)     <span class="cm"># {'Casa': 3, 'Rabat': 1, 'Fes': 1}  ✓</span>

<span class="cm"># Ordinal — we sort by a known scale, not alphabetically</span>
order = {<span class="st">"poor"</span>: 0, <span class="st">"good"</span>: 1, <span class="st">"excellent"</span>: 2}
ratings = [<span class="st">"good"</span>, <span class="st">"excellent"</span>, <span class="st">"poor"</span>, <span class="st">"good"</span>]
ratings.<span class="fn">sort</span>(key=<span class="kw">lambda</span> r: order[r])
<span class="fn">print</span>(ratings)   <span class="cm"># ['poor', 'good', 'good', 'excellent']  ✓</span>` },
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
        code: { ar: `expenses = [
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

<span class="fn">report</span>(expenses)`, en: `expenses = [
    {<span class="st">"date"</span>: <span class="st">"2026-03-01"</span>, <span class="st">"category"</span>: <span class="st">"food"</span>,      <span class="st">"amount"</span>: 85},
    {<span class="st">"date"</span>: <span class="st">"2026-03-01"</span>, <span class="st">"category"</span>: <span class="st">"transport"</span>, <span class="st">"amount"</span>: 20},
    {<span class="st">"date"</span>: <span class="st">"2026-03-02"</span>, <span class="st">"category"</span>: <span class="st">"bills"</span>,     <span class="st">"amount"</span>: 300},
    {<span class="st">"date"</span>: <span class="st">"2026-03-03"</span>, <span class="st">"category"</span>: <span class="st">"food"</span>,      <span class="st">"amount"</span>: 60},
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
        <span class="fn">print</span>(<span class="st">"No data"</span>); <span class="kw">return</span>
    grand = <span class="fn">total</span>(items)
    days = <span class="fn">len</span>({e[<span class="st">"date"</span>] <span class="kw">for</span> e <span class="kw">in</span> items})   <span class="cm"># distinct days</span>
    <span class="fn">print</span>(<span class="st">f"Total: {grand:,.0f} MAD over {days} days"</span>)
    <span class="fn">print</span>(<span class="st">f"Daily average: {grand / days:,.0f} MAD"</span>)
    <span class="kw">for</span> cat, amt <span class="kw">in</span> <span class="fn">sorted</span>(<span class="fn">by_category</span>(items).<span class="fn">items</span>(), key=<span class="kw">lambda</span> x: -x[1]):
        <span class="fn">print</span>(<span class="st">f"  {cat}: {amt:,.0f} ({amt / grand:.1%})"</span>)

<span class="fn">report</span>(expenses)` },
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
        code: { ar: `<span class="kw">import</span> numpy <span class="kw">as</span> np

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
<span class="fn">print</span>(np.<span class="fn">array</span>([1, 2, <span class="st">"3"</span>]).dtype)   <span class="cm"># <U21  (نصّ!)</span>`, en: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># A regular list vs. an array</span>
prices_usd = np.<span class="fn">array</span>([12.0, 8.5, 30.0, 26.0])

<span class="cm"># A vectorized operation — no loop, all elements at once</span>
prices_mad = prices_usd * 10.2
<span class="fn">print</span>(prices_mad)          <span class="cm"># [122.4  86.7 306.  265.2]</span>

<span class="cm"># Computing over the whole array</span>
<span class="fn">print</span>(prices_mad.<span class="fn">sum</span>())    <span class="cm"># 780.3</span>
<span class="fn">print</span>(prices_mad.<span class="fn">mean</span>())   <span class="cm"># 195.075</span>

<span class="cm"># + adds element-by-element, it doesn't concatenate</span>
a = np.<span class="fn">array</span>([1, 2, 3])
b = np.<span class="fn">array</span>([10, 20, 30])
<span class="fn">print</span>(a + b)              <span class="cm"># [11 22 33]</span>

<span class="cm"># Mixing types converts everything to text — watch out</span>
<span class="fn">print</span>(np.<span class="fn">array</span>([1, 2, <span class="st">"3"</span>]).dtype)   <span class="cm"># <U21  (text!)</span>` },
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
        code: { ar: `<span class="kw">import</span> numpy <span class="kw">as</span> np

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
<span class="fn">print</span>(np.<span class="fn">linspace</span>(0, 1, 5))   <span class="cm"># [0.   0.25 0.5  0.75 1.  ]</span>`, en: `<span class="kw">import</span> numpy <span class="kw">as</span> np

grid = np.<span class="fn">arange</span>(12).<span class="fn">reshape</span>(3, 4)
<span class="fn">print</span>(grid)
<span class="cm"># [[ 0  1  2  3]</span>
<span class="cm">#  [ 4  5  6  7]</span>
<span class="cm">#  [ 8  9 10 11]]</span>

<span class="fn">print</span>(grid.shape)   <span class="cm"># (3, 4)</span>
<span class="fn">print</span>(grid.ndim)    <span class="cm"># 2</span>
<span class="fn">print</span>(grid.size)    <span class="cm"># 12</span>
<span class="fn">print</span>(grid.dtype)   <span class="cm"># int64</span>

<span class="cm"># The same data as a single column (useful before sklearn models)</span>
column = np.<span class="fn">arange</span>(5).<span class="fn">reshape</span>(-1, 1)
<span class="fn">print</span>(column.shape)   <span class="cm"># (5, 1)</span>

<span class="cm"># Quick creation</span>
<span class="fn">print</span>(np.<span class="fn">zeros</span>((2, 3)))
<span class="fn">print</span>(np.<span class="fn">linspace</span>(0, 1, 5))   <span class="cm"># [0.   0.25 0.5  0.75 1.  ]</span>` },
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
        code: { ar: `<span class="kw">import</span> numpy <span class="kw">as</span> np
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
safe = arr[0:2, 0:2].<span class="fn">copy</span>()`, en: `<span class="kw">import</span> numpy <span class="kw">as</span> np
arr = np.<span class="fn">arange</span>(20).<span class="fn">reshape</span>(5, 4)

<span class="fn">print</span>(arr[0])         <span class="cm"># [0 1 2 3]      the first row</span>
<span class="fn">print</span>(arr[:, 0])      <span class="cm"># [0 4 8 12 16]  the first column</span>
<span class="fn">print</span>(arr[2, 3])      <span class="cm"># 11             a single cell</span>
<span class="fn">print</span>(arr[0:3, 1:3])  <span class="cm"># a rectangle: rows 0-2, columns 1-2</span>

<span class="cm"># Non-adjacent columns</span>
<span class="fn">print</span>(arr[:, [0, 3]])  <span class="cm"># only the first and last columns</span>

<span class="cm"># The view trap: slicing doesn't copy</span>
sub = arr[0:2, 0:2]
sub[0, 0] = 99
<span class="fn">print</span>(arr[0, 0])      <span class="cm"># 99  ← the original changed!</span>

<span class="cm"># The fix: an independent copy</span>
safe = arr[0:2, 0:2].<span class="fn">copy</span>()` },
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
        code: { ar: `<span class="kw">import</span> numpy <span class="kw">as</span> np
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
<span class="fn">print</span>(data[data[:, 0] &gt; 1000])   <span class="cm"># [[1200 3] [1500 2]]</span>`, en: `<span class="kw">import</span> numpy <span class="kw">as</span> np
scores = np.<span class="fn">array</span>([55, 80, 42, 90, 67, 38, 75])

mask = scores &gt;= 60
<span class="fn">print</span>(mask)              <span class="cm"># [False  True False  True  True False  True]</span>
<span class="fn">print</span>(scores[mask])      <span class="cm"># [80 90 67 75]   the passing scores</span>

<span class="fn">print</span>(mask.<span class="fn">sum</span>())       <span class="cm"># 4      how many passed</span>
<span class="fn">print</span>(mask.<span class="fn">mean</span>())      <span class="cm"># 0.571  pass rate</span>

<span class="cm"># Two combined conditions — parentheses around each, and & not and</span>
mid = scores[(scores &gt;= 50) &amp; (scores &lt;= 80)]
<span class="fn">print</span>(mid)               <span class="cm"># [55 80 67 75]</span>

<span class="cm"># Applying a column mask to a whole table</span>
data = np.<span class="fn">array</span>([[1200, 3], [800, 5], [1500, 2]])
<span class="fn">print</span>(data[data[:, 0] &gt; 1000])   <span class="cm"># [[1200 3] [1500 2]]</span>` },
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
        code: { ar: `<span class="kw">import</span> numpy <span class="kw">as</span> np

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
<span class="fn">print</span>(weighted.shape)      <span class="cm"># (4, 3)</span>`, en: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># 4 students × 3 exams</span>
data = np.<span class="fn">array</span>([
    [12, 15, 10],
    [18, 14, 16],
    [ 9, 11, 13],
    [20, 19, 17],
], dtype=<span class="fn">float</span>)

<span class="cm"># The average of each exam (column) — shape (3,)</span>
col_means = data.<span class="fn">mean</span>(axis=0)
<span class="fn">print</span>(col_means)          <span class="cm"># [14.75 14.75 14.  ]</span>

<span class="cm"># Broadcasting: the (3,) vector is subtracted from every row in (4,3)</span>
centered = data - col_means
<span class="fn">print</span>(centered.shape)      <span class="cm"># (4, 3)</span>

<span class="cm"># Weighting each student (row) — turn the weights into a (4,1) column</span>
weights = np.<span class="fn">array</span>([1.0, 1.2, 0.8, 1.1]).<span class="fn">reshape</span>(-1, 1)
weighted = centered * weights
<span class="fn">print</span>(weighted.shape)      <span class="cm"># (4, 3)</span>` },
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
        code: { ar: `<span class="kw">import</span> numpy <span class="kw">as</span> np

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
<span class="fn">print</span>(above.<span class="fn">sum</span>())        <span class="cm"># 3  أيام فوق المتوسط</span>`, en: `<span class="kw">import</span> numpy <span class="kw">as</span> np

<span class="cm"># 7 days × 3 branches</span>
sales = np.<span class="fn">array</span>([
    [120, 90, 60], [100, 80, 75], [140, 95, 50], [110, 70, 80],
    [160, 100, 65], [130, 85, 70], [ 90, 60, 55],
])

<span class="cm"># axis=0: the rows collapse → one result per branch (column)</span>
<span class="fn">print</span>(sales.<span class="fn">sum</span>(axis=0))    <span class="cm"># [850 580 455]  total for each branch</span>

<span class="cm"># axis=1: the columns collapse → one result per day (row)</span>
daily = sales.<span class="fn">sum</span>(axis=1)
<span class="fn">print</span>(daily)               <span class="cm"># [270 255 285 260 325 285 205]</span>

<span class="cm"># The best-selling day (the position, not the value)</span>
<span class="fn">print</span>(daily.<span class="fn">argmax</span>())      <span class="cm"># 4  → the fifth day</span>

<span class="cm"># Days above the daily average</span>
above = daily &gt; daily.<span class="fn">mean</span>()
<span class="fn">print</span>(above.<span class="fn">sum</span>())        <span class="cm"># 3  days above average</span>` },
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
    },

    /* ===================== المستوى 3: Pandas ===================== */

    {
        title: {
            ar: "Series وDataFrame والفهرس",
            en: "Series, DataFrame and the index"
        },
        body: {
            ar: `
<p>في NumPy عملنا على مصفوفات أرقام مجهولة الأعمدة. لكن جدول المبيعات الحقيقي فيه أعمدة بأسماء — المدينة، الفئة، السعر — وأنواع مختلطة (نصّ ورقم وتاريخ). <strong>Pandas</strong> تبني هذه الطبقة فوق NumPy عبر بنيتين: <strong>Series</strong> لعمود واحد، و<strong>DataFrame</strong> لجدول كامل.</p>

<h3>Series: عمود واحد بفهرس</h3>

<p>الـ Series مصفوفة قيم مصحوبة بـ <strong>فهرس (index)</strong> يسمّي كل قيمة — تشبه قاموساً مرتّباً. <code>pd.Series([2400, 1800, 900], index=["Casa", "Rabat", "Fes"])</code>. الوصول بالاسم <code>s["Rabat"]</code> أو بالموضع <code>s.iloc[1]</code>.</p>

<h3>DataFrame: جدول = أعمدة Series تتشارك الفهرس</h3>

<p><code>pd.DataFrame({"city": [...], "revenue": [...]})</code>. كل عمود Series، وكلها تتشارك فهرس الصفوف نفسه. <code>df["revenue"]</code> يُرجع Series، و<code>df[["revenue", "city"]]</code> (قوسان) يُرجع DataFrame فرعياً.</p>

<h3>الفهرس ليس مجرّد ترقيم</h3>

<p>افتراضياً 0، 1، 2… لكنه <em>هوية الصفّ</em>: يمكن جعله رقم الطلب أو التاريخ بـ <code>set_index("order_id")</code>. والأهم: عمليات Pandas <strong>تحاذي حسب الفهرس لا الموضع</strong>، فجمع Series بفهارس مختلفة يطابق بالاسم ويعطي <code>NaN</code> لما لا مقابل له.</p>

<h3>نظرة أولى على البنية</h3>

<p><code>.shape</code> (صفوف، أعمدة)، <code>.columns</code>، <code>.index</code>، <code>.dtypes</code> (نوع كل عمود)، و<code>.values</code> (مصفوفة NumPy تحت الجدول). افحص هذه قبل أي تحليل.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>توقّع أن <code>df[0]</code> يعطي أول صفّ</strong> — بل يبحث عن عمود اسمه <code>0</code>. الصفّ الأول بـ <code>df.iloc[0]</code>.</li>
    <li><strong>الخلط بين <code>df["col"]</code> (Series) و<code>df[["col"]]</code> (DataFrame)</strong> — كثير من الدوال تتوقّع أحدهما تحديداً.</li>
    <li><strong>ترك الفهرس متقطّعاً بعد الفلترة</strong> ثم الاندهاش من محاذاة غريبة — <code>reset_index(drop=True)</code>.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>Series = قيم + فهرس؛ DataFrame = أعمدة Series بفهرس مشترك</li>
    <li>الفهرس هوية الصفّ، والعمليات تحاذي به لا بالموضع</li>
    <li><code>df["c"]</code> عمود (Series)، <code>df[["a", "b"]]</code> إطار فرعي</li>
    <li>افحص <code>.shape</code> و<code>.columns</code> و<code>.dtypes</code> أولاً</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>ابنِ DataFrame لأربع مدن بأعمدة <code>city</code> و<code>orders</code> و<code>revenue</code>. اجعل <code>city</code> الفهرس. اطبع <code>.dtypes</code>، ثم عمود <code>revenue</code> وحده، ثم صفّ مدينة واحدة عبر <code>.loc</code>.</p>
`,
            en: `
<p>In NumPy we worked on arrays of numbers with no named columns. A real sales table has named columns — city, category, price — and mixed types (text, number, date). <strong>Pandas</strong> builds that layer on top of NumPy with two structures: <strong>Series</strong> for a single column, and <strong>DataFrame</strong> for a whole table.</p>

<h3>Series: one column with an index</h3>

<p>A Series is an array of values paired with an <strong>index</strong> that names each value — like an ordered dictionary. <code>pd.Series([2400, 1800, 900], index=["Casa", "Rabat", "Fes"])</code>. Access by name <code>s["Rabat"]</code> or by position <code>s.iloc[1]</code>.</p>

<h3>DataFrame: a table = Series columns sharing an index</h3>

<p><code>pd.DataFrame({"city": [...], "revenue": [...]})</code>. Each column is a Series, and they all share the same row index. <code>df["revenue"]</code> returns a Series; <code>df[["revenue", "city"]]</code> (double brackets) returns a sub-DataFrame.</p>

<h3>The index is not just row numbers</h3>

<p>By default 0, 1, 2… but it is the <em>identity of the row</em>: you can make it the order id or the date with <code>set_index("order_id")</code>. Crucially, Pandas operations <strong>align by index, not by position</strong>, so adding two Series with different indexes matches by name and yields <code>NaN</code> where there is no counterpart.</p>

<h3>A first look at the structure</h3>

<p><code>.shape</code> (rows, columns), <code>.columns</code>, <code>.index</code>, <code>.dtypes</code> (each column's type), and <code>.values</code> (the NumPy array underneath). Check these before any analysis.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Expecting <code>df[0]</code> to give the first row</strong> — it looks for a column named <code>0</code>. The first row is <code>df.iloc[0]</code>.</li>
    <li><strong>Confusing <code>df["col"]</code> (Series) with <code>df[["col"]]</code> (DataFrame)</strong> — many functions expect one specific shape.</li>
    <li><strong>Leaving a gappy index after filtering</strong> then being surprised by odd alignment — <code>reset_index(drop=True)</code>.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>Series = values + index; DataFrame = Series columns with a shared index</li>
    <li>The index is the row's identity, and operations align by it, not by position</li>
    <li><code>df["c"]</code> is a column (Series), <code>df[["a", "b"]]</code> a sub-frame</li>
    <li>Check <code>.shape</code>, <code>.columns</code> and <code>.dtypes</code> first</li>
</ul>

<h3>Exercise</h3>

<p>Build a DataFrame for four cities with columns <code>city</code>, <code>orders</code> and <code>revenue</code>. Make <code>city</code> the index. Print <code>.dtypes</code>, then the <code>revenue</code> column alone, then one city's row via <code>.loc</code>.</p>
`
        },
        code: { ar: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="cm"># Series: عمود واحد بفهرس مسمّى</span>
revenue = pd.<span class="fn">Series</span>([2400, 1800, 900], index=[<span class="st">"Casa"</span>, <span class="st">"Rabat"</span>, <span class="st">"Fes"</span>])
<span class="fn">print</span>(revenue[<span class="st">"Rabat"</span>])     <span class="cm"># 1800  (بالاسم)</span>
<span class="fn">print</span>(revenue.<span class="fn">iloc</span>[0])       <span class="cm"># 2400  (بالموضع)</span>

<span class="cm"># DataFrame: عدّة أعمدة تتشارك الفهرس</span>
df = pd.<span class="fn">DataFrame</span>({
    <span class="st">"city"</span>:    [<span class="st">"Casa"</span>, <span class="st">"Rabat"</span>, <span class="st">"Fes"</span>],
    <span class="st">"orders"</span>:  [12, 9, 5],
    <span class="st">"revenue"</span>: [2400, 1800, 900],
})
<span class="fn">print</span>(df.shape)             <span class="cm"># (3, 3)</span>
<span class="fn">print</span>(df[<span class="st">"revenue"</span>].<span class="fn">sum</span>())   <span class="cm"># 5100</span>

<span class="cm"># الفهرس = هوية الصفّ لا مجرّد ترقيم</span>
df = df.<span class="fn">set_index</span>(<span class="st">"city"</span>)
<span class="fn">print</span>(df.<span class="fn">loc</span>[<span class="st">"Casa"</span>, <span class="st">"revenue"</span>])   <span class="cm"># 2400</span>`, en: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="cm"># Series: a single column with a named index</span>
revenue = pd.<span class="fn">Series</span>([2400, 1800, 900], index=[<span class="st">"Casa"</span>, <span class="st">"Rabat"</span>, <span class="st">"Fes"</span>])
<span class="fn">print</span>(revenue[<span class="st">"Rabat"</span>])     <span class="cm"># 1800  (by label)</span>
<span class="fn">print</span>(revenue.<span class="fn">iloc</span>[0])       <span class="cm"># 2400  (by position)</span>

<span class="cm"># DataFrame: several columns sharing an index</span>
df = pd.<span class="fn">DataFrame</span>({
    <span class="st">"city"</span>:    [<span class="st">"Casa"</span>, <span class="st">"Rabat"</span>, <span class="st">"Fes"</span>],
    <span class="st">"orders"</span>:  [12, 9, 5],
    <span class="st">"revenue"</span>: [2400, 1800, 900],
})
<span class="fn">print</span>(df.shape)             <span class="cm"># (3, 3)</span>
<span class="fn">print</span>(df[<span class="st">"revenue"</span>].<span class="fn">sum</span>())   <span class="cm"># 5100</span>

<span class="cm"># The index = a row's identity, not just numbering</span>
df = df.<span class="fn">set_index</span>(<span class="st">"city"</span>)
<span class="fn">print</span>(df.<span class="fn">loc</span>[<span class="st">"Casa"</span>, <span class="st">"revenue"</span>])   <span class="cm"># 2400</span>` },
        quiz: {
            q: {
                ar: "ما الفرق بين <code>df[\"revenue\"]</code> و<code>df[[\"revenue\"]]</code>؟",
                en: "What is the difference between <code>df[\"revenue\"]</code> and <code>df[[\"revenue\"]]</code>?"
            },
            options: {
                ar: [
                    "لا فرق، كلاهما نفس الشيء",
                    "الأول Series (عمود واحد)، والثاني DataFrame بعمود واحد",
                    "الأول خطأ في الصياغة",
                    "الثاني يختار صفّاً لا عموداً"
                ],
                en: [
                    "No difference, both are the same",
                    "The first is a Series (one column), the second a DataFrame with one column",
                    "The first is a syntax error",
                    "The second selects a row, not a column"
                ]
            },
            correct: 1,
            explanation: {
                ar: "القوسان المربّعان المزدوجان يمرّران قائمة أسماء أعمدة، فالنتيجة DataFrame حتى لو كان الاسم واحداً. القوس المفرد يمرّر اسماً واحداً فيُرجع Series. كثير من دوال Pandas تتوقّع أحد الشكلين تحديداً.",
                en: "Double brackets pass a list of column names, so the result is a DataFrame even for a single name. A single bracket passes one name and returns a Series. Many Pandas functions expect one specific shape."
            }
        }
    },

    {
        title: {
            ar: "القراءة والاستكشاف الأول: read_csv وinfo وdescribe",
            en: "Reading and first exploration: read_csv, info, describe"
        },
        body: {
            ar: `
<p>بياناتك لن تكون مكتوبة يدوياً في الكود؛ ستأتي في ملف CSV مُصدَّر من نظام مبيعات أو استبيان. أول دقائق مع أي ملف جديد لها طقوس ثابتة: حمّله، انظر شكله، افحص أنواعه، لخّص أرقامه — <strong>قبل</strong> أي تحليل.</p>

<h3>التحميل: read_csv</h3>

<p><code>df = pd.read_csv("sales.csv")</code>. معطيات مهمة: <code>sep=";"</code> لو الفاصل منقوطة، <code>encoding="utf-8"</code> (أو <code>latin-1</code> لملفات قديمة)، و<code>parse_dates=["order_date"]</code> ليحوّل عمود التاريخ إلى نوع تاريخ حقيقي لا نصّ.</p>

<h3>النظرة السريعة: head / tail / sample</h3>

<p><code>df.head()</code> أول 5 صفوف، <code>df.tail(3)</code> آخر 3، <code>df.sample(5)</code> عيّنة عشوائية — أصدق أحياناً لأن أول الملف قد يكون غير ممثِّل (مرتّب زمنياً مثلاً).</p>

<h3>البنية: info</h3>

<p><code>df.info()</code> يعطي: عدد الصفوف، اسم كل عمود، عدد قيمه <strong>غير الفارغة</strong>، ونوعه. علامتا إنذار: عمود رقمي نوعه <code>object</code> (نصّ مخفيّ)، أو عدد غير فارغ أقلّ من عدد الصفوف (قيم مفقودة).</p>

<h3>التلخيص الرقمي: describe</h3>

<p><code>df.describe()</code> للأعمدة الرقمية: العدّ، المتوسط، الانحراف المعياري، الأدنى، الأرباع، الأقصى. مقارنة المتوسط بالوسيط (<code>50%</code>) تكشف الالتواء. <code>df.describe(include="object")</code> للنصوص: عدد القيم الفريدة والأكثر تكراراً.</p>

<h3>توزيع الفئات: value_counts</h3>

<p><code>df["city"].value_counts()</code> عدد الصفوف لكل مدينة، و<code>normalize=True</code> للنِّسَب. أسرع طريقة لفهم عمود فئوي.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>عدم تمرير <code>parse_dates</code></strong> ثم محاولة <code>.dt.month</code> على نصّ ← خطأ.</li>
    <li><strong>الاكتفاء بـ <code>head()</code></strong> والملف مرتّب زمنياً فتظنّ كل الطلبات من سنة واحدة.</li>
    <li><strong>تجاهل أن <code>describe()</code> يتخطّى الأعمدة النصية والمفقودة صامتاً.</strong></li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>read_csv</code> مع <code>parse_dates</code> و<code>encoding</code> و<code>sep</code> حسب الملف</li>
    <li><code>info()</code> = أنواع + عدد غير الفارغ (يكشف المفقود والأنواع الخاطئة)</li>
    <li><code>describe()</code> = ملخّص رقمي؛ قارن المتوسط بالوسيط</li>
    <li><code>value_counts()</code> = توزيع عمود فئوي</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>حمّل ملف مبيعات بـ <code>parse_dates</code>. اطبع <code>shape</code> ثم <code>info()</code> ثم <code>describe()</code>. من <code>value_counts()</code> على <code>category</code>: ما الفئة الأكثر تكراراً؟ وهل هناك عمود عدد قيمه غير الفارغة أقلّ من عدد الصفوف؟</p>
`,
            en: `
<p>Your data won't be typed by hand in code; it arrives as a CSV file exported from a sales system or a survey. The first minutes with any new file follow a fixed ritual: load it, look at its shape, check its types, summarize its numbers — <strong>before</strong> any analysis.</p>

<h3>Loading: read_csv</h3>

<p><code>df = pd.read_csv("sales.csv")</code>. Key arguments: <code>sep=";"</code> if the delimiter is a semicolon, <code>encoding="utf-8"</code> (or <code>latin-1</code> for old files), and <code>parse_dates=["order_date"]</code> so the date column becomes a real date type, not text.</p>

<h3>The quick look: head / tail / sample</h3>

<p><code>df.head()</code> the first 5 rows, <code>df.tail(3)</code> the last 3, <code>df.sample(5)</code> a random sample — often more honest, because the top of a file can be unrepresentative (sorted by date, say).</p>

<h3>The structure: info</h3>

<p><code>df.info()</code> gives: the row count, each column's name, its count of <strong>non-null</strong> values, and its type. Two red flags: a numeric column typed <code>object</code> (hidden text), or a non-null count below the row count (missing values).</p>

<h3>The numeric summary: describe</h3>

<p><code>df.describe()</code> for numeric columns: count, mean, standard deviation, min, quartiles, max. Comparing the mean to the median (<code>50%</code>) reveals skew. <code>df.describe(include="object")</code> for text: number of unique values and the most frequent one.</p>

<h3>Category distribution: value_counts</h3>

<p><code>df["city"].value_counts()</code> the row count per city, and <code>normalize=True</code> for ratios. The fastest way to understand a categorical column.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Not passing <code>parse_dates</code></strong> then trying <code>.dt.month</code> on text ← error.</li>
    <li><strong>Stopping at <code>head()</code></strong> when the file is sorted by date, so you think every order is from one year.</li>
    <li><strong>Ignoring that <code>describe()</code> silently skips text and missing columns.</strong></li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>read_csv</code> with <code>parse_dates</code>, <code>encoding</code> and <code>sep</code> per file</li>
    <li><code>info()</code> = types + non-null count (reveals missing data and wrong types)</li>
    <li><code>describe()</code> = numeric summary; compare mean to median</li>
    <li><code>value_counts()</code> = a categorical column's distribution</li>
</ul>

<h3>Exercise</h3>

<p>Load a sales file with <code>parse_dates</code>. Print <code>shape</code>, then <code>info()</code>, then <code>describe()</code>. From <code>value_counts()</code> on <code>category</code>: which category is most frequent? And is there a column whose non-null count is below the row count?</p>
`
        },
        code: { ar: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

df = pd.<span class="fn">read_csv</span>(
    <span class="st">"sales.csv"</span>,
    parse_dates=[<span class="st">"order_date"</span>],   <span class="cm"># نصّ ← نوع تاريخ حقيقي</span>
    encoding=<span class="st">"utf-8"</span>,
)

<span class="fn">print</span>(df.shape)          <span class="cm"># (5000, 6)</span>
<span class="fn">print</span>(df.<span class="fn">head</span>(3))

df.<span class="fn">info</span>()
<span class="cm"># order_date    5000 non-null   datetime64[ns]</span>
<span class="cm"># city          5000 non-null   object</span>
<span class="cm"># category      4980 non-null   object      ← 20 قيمة مفقودة</span>
<span class="cm"># unit_price    5000 non-null   float64</span>

<span class="fn">print</span>(df.<span class="fn">describe</span>())                       <span class="cm"># ملخّص الأعمدة الرقمية</span>
<span class="fn">print</span>(df[<span class="st">"city"</span>].<span class="fn">value_counts</span>(normalize=<span class="kw">True</span>))
<span class="cm"># Casablanca    0.41</span>
<span class="cm"># Rabat         0.23</span>`, en: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

df = pd.<span class="fn">read_csv</span>(
    <span class="st">"sales.csv"</span>,
    parse_dates=[<span class="st">"order_date"</span>],   <span class="cm"># text ← a real date type</span>
    encoding=<span class="st">"utf-8"</span>,
)

<span class="fn">print</span>(df.shape)          <span class="cm"># (5000, 6)</span>
<span class="fn">print</span>(df.<span class="fn">head</span>(3))

df.<span class="fn">info</span>()
<span class="cm"># order_date    5000 non-null   datetime64[ns]</span>
<span class="cm"># city          5000 non-null   object</span>
<span class="cm"># category      4980 non-null   object      ← 20 missing values</span>
<span class="cm"># unit_price    5000 non-null   float64</span>

<span class="fn">print</span>(df.<span class="fn">describe</span>())                       <span class="cm"># a summary of the numeric columns</span>
<span class="fn">print</span>(df[<span class="st">"city"</span>].<span class="fn">value_counts</span>(normalize=<span class="kw">True</span>))
<span class="cm"># Casablanca    0.41</span>
<span class="cm"># Rabat         0.23</span>` },
        quiz: {
            q: {
                ar: "في مخرجات <code>df.info()</code> ظهر عمود <code>unit_price</code> بنوع <code>object</code> بدل <code>float64</code>. ماذا يعني ذلك غالباً؟",
                en: "In <code>df.info()</code> the <code>unit_price</code> column shows type <code>object</code> instead of <code>float64</code>. What does that usually mean?"
            },
            options: {
                ar: [
                    "الملف تالف ولا يمكن قراءته",
                    "العمود يحوي نصوصاً مختلطة بالأرقام (رمز عملة، فاصلة، شرطة للمفقود) فمنعت التحويل الرقمي",
                    "Pandas لا تدعم الأرقام العشرية",
                    "العمود فارغ تماماً"
                ],
                en: [
                    "The file is corrupt and can't be read",
                    "The column contains text mixed with numbers (a currency symbol, a comma, a dash for missing) which blocked numeric conversion",
                    "Pandas doesn't support decimals",
                    "The column is entirely empty"
                ]
            },
            correct: 1,
            explanation: {
                ar: "حين يعجز Pandas عن تحويل كل قيم العمود إلى رقم، يُبقيه نصّاً (<code>object</code>). السبب المعتاد قيمة مثل \"1,200\" أو \"MAD 50\" أو \"-\". العلاج: تنظيف تلك القيم بـ <code>.str.replace</code> ثم <code>pd.to_numeric</code>.",
                en: "When Pandas can't convert every value in a column to a number, it keeps it as text (<code>object</code>). The usual cause is a value like \"1,200\" or \"MAD 50\" or \"-\". The fix: clean those with <code>.str.replace</code> then <code>pd.to_numeric</code>."
            }
        }
    },

    {
        title: {
            ar: "الاختيار والفلترة: loc وiloc وquery",
            en: "Selecting and filtering: loc, iloc and query"
        },
        body: {
            ar: `
<p>بعد تحميل الجدول تحتاج دائماً جزءاً منه: صفوفاً بعينها، أعمدة بعينها، أو صفوفاً تحقّق شرطاً. Pandas تفصل بوضوح بين الاختيار <strong>بالموضع</strong> والاختيار <strong>بالتسمية</strong> — وخلطهما أكثر أخطاء المبتدئين.</p>

<h3>iloc: بالموضع الرقمي</h3>

<p><code>df.iloc[0]</code> أول صفّ، <code>df.iloc[0:5]</code> أول خمسة، <code>df.iloc[0:5, 0:2]</code> أول 5 صفوف × أول عمودين. مثل NumPy تماماً، والنهاية <strong>غير شاملة</strong>.</p>

<h3>loc: بالتسمية</h3>

<p><code>df.loc[10]</code> الصفّ الذي <em>فهرسه</em> 10 (وقد لا يكون العاشر)، <code>df.loc[:, "city":"quantity"]</code> كل الصفوف والأعمدة من <code>city</code> إلى <code>quantity</code>. مع <code>loc</code> النهاية <strong>شاملة</strong>.</p>

<h3>الفلترة المنطقية</h3>

<p><code>df[df["quantity"] &gt; 10]</code> كل الصفوف التي كميتها فوق 10. ادمج الشروط بـ <code>&amp;</code> <code>|</code> <code>~</code> وكل شرط بين قوسين — مثل NumPy. <code>df["city"].isin(["Casa", "Rabat"])</code> بديل أنظف من سلسلة <code>|</code>. ومع <code>loc</code> تختار أعمدة أيضاً: <code>df.loc[df["quantity"] &gt; 10, ["city", "quantity"]]</code>.</p>

<h3>query: شرط كنصّ</h3>

<p><code>df.query("quantity &gt; 10 and city == 'Rabat'")</code> — يقبل <code>and/or</code> العاديّة، أقصر للقراءة، ويشير للمتغيّرات الخارجية بـ <code>@</code>: <code>df.query("unit_price &gt; @threshold")</code>.</p>

<h3>SettingWithCopyWarning</h3>

<p><code>df[df.city == "Casa"]["price"] = 0</code> يحذّر ولا يعمل بموثوقية: الفلترة قد تُرجع نسخة. الصحيح صياغة <code>loc</code> واحدة: <code>df.loc[df.city == "Casa", "price"] = 0</code>.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>استخدام <code>and</code> بدل <code>&amp;</code></strong> يرمي «truth value of a Series is ambiguous».</li>
    <li><strong>الخلط في النطاق:</strong> <code>df.loc[0:5]</code> يعطي 6 صفوف (شامل)، <code>df.iloc[0:5]</code> يعطي 5.</li>
    <li><strong>التسلسل <code>df[...][...] =</code></strong> يولّد التحذير ولا يعدّل الأصل.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>iloc</code> بالموضع (نهاية غير شاملة)، <code>loc</code> بالتسمية (نهاية شاملة)</li>
    <li>فلترة: <code>df[condition]</code>، ادمج بـ <code>&amp;</code> <code>|</code> <code>~</code> وأقواس، أو <code>.isin()</code></li>
    <li><code>query("...")</code> أقصر ويقبل <code>and/or</code> و<code>@var</code></li>
    <li>للتعيين المشروط استخدم <code>df.loc[mask, col] = value</code> صياغةً واحدة</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>من جدول المبيعات: (1) أول 10 صفوف بعمودَي <code>city</code> و<code>unit_price</code> فقط، (2) الطلبات التي <code>quantity &gt;= 5</code> <strong>و</strong> <code>city</code> من {Casa, Rabat}، (3) نفس النتيجة عبر <code>query</code>.</p>
`,
            en: `
<p>After loading the table you always need a part of it: certain rows, certain columns, or rows that meet a condition. Pandas cleanly separates selection <strong>by position</strong> from selection <strong>by label</strong> — and mixing them is the top beginner mistake.</p>

<h3>iloc: by numeric position</h3>

<p><code>df.iloc[0]</code> the first row, <code>df.iloc[0:5]</code> the first five, <code>df.iloc[0:5, 0:2]</code> the first 5 rows &times; first 2 columns. Just like NumPy, and the end is <strong>exclusive</strong>.</p>

<h3>loc: by label</h3>

<p><code>df.loc[10]</code> the row whose <em>index</em> is 10 (may not be the tenth), <code>df.loc[:, "city":"quantity"]</code> all rows, columns from <code>city</code> to <code>quantity</code>. With <code>loc</code> the end is <strong>inclusive</strong>.</p>

<h3>Boolean filtering</h3>

<p><code>df[df["quantity"] &gt; 10]</code> every row with quantity above 10. Combine conditions with <code>&amp;</code> <code>|</code> <code>~</code> and parenthesize each — like NumPy. <code>df["city"].isin(["Casa", "Rabat"])</code> is cleaner than a chain of <code>|</code>. And with <code>loc</code> you pick columns too: <code>df.loc[df["quantity"] &gt; 10, ["city", "quantity"]]</code>.</p>

<h3>query: a condition as text</h3>

<p><code>df.query("quantity &gt; 10 and city == 'Rabat'")</code> — accepts plain <code>and/or</code>, reads shorter, and references outside variables with <code>@</code>: <code>df.query("unit_price &gt; @threshold")</code>.</p>

<h3>SettingWithCopyWarning</h3>

<p><code>df[df.city == "Casa"]["price"] = 0</code> warns and doesn't work reliably: the filter may return a copy. The correct way is one <code>loc</code> statement: <code>df.loc[df.city == "Casa", "price"] = 0</code>.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Using <code>and</code> instead of <code>&amp;</code></strong> raises "truth value of a Series is ambiguous".</li>
    <li><strong>Range confusion:</strong> <code>df.loc[0:5]</code> gives 6 rows (inclusive), <code>df.iloc[0:5]</code> gives 5.</li>
    <li><strong>Chaining <code>df[...][...] =</code></strong> triggers the warning and doesn't modify the original.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>iloc</code> by position (exclusive end), <code>loc</code> by label (inclusive end)</li>
    <li>Filter: <code>df[condition]</code>, combine with <code>&amp;</code> <code>|</code> <code>~</code> and parentheses, or <code>.isin()</code></li>
    <li><code>query("...")</code> is shorter and accepts <code>and/or</code> and <code>@var</code></li>
    <li>For conditional assignment use one <code>df.loc[mask, col] = value</code> statement</li>
</ul>

<h3>Exercise</h3>

<p>From the sales table: (1) the first 10 rows with only <code>city</code> and <code>unit_price</code>, (2) orders where <code>quantity &gt;= 5</code> <strong>and</strong> <code>city</code> is in {Casa, Rabat}, (3) the same result via <code>query</code>.</p>
`
        },
        code: { ar: `<span class="cm"># بالموضع مقابل التسمية</span>
<span class="fn">print</span>(df.<span class="fn">iloc</span>[0:3])        <span class="cm"># أول 3 صفوف (نهاية غير شاملة)</span>
<span class="fn">print</span>(df.<span class="fn">loc</span>[0:3])         <span class="cm"># الفهارس 0..3 = 4 صفوف (شامل)</span>
<span class="fn">print</span>(df.<span class="fn">iloc</span>[:5, [1, 2]])  <span class="cm"># أول 5 صفوف، العمودان 1 و2</span>

<span class="cm"># فلترة منطقية + اختيار أعمدة معاً</span>
big = df.<span class="fn">loc</span>[
    (df[<span class="st">"quantity"</span>] &gt;= 5) &amp; (df[<span class="st">"city"</span>].<span class="fn">isin</span>([<span class="st">"Casablanca"</span>, <span class="st">"Rabat"</span>])),
    [<span class="st">"order_id"</span>, <span class="st">"city"</span>, <span class="st">"quantity"</span>],
]
<span class="fn">print</span>(big.<span class="fn">head</span>())

<span class="cm"># نفس الشيء بـ query — أقصر</span>
threshold = 5
big2 = df.<span class="fn">query</span>(<span class="st">"quantity &gt;= @threshold and city in ['Casablanca', 'Rabat']"</span>)

<span class="cm"># تعيين مشروط: صياغة loc واحدة (لا تسلسل)</span>
df.<span class="fn">loc</span>[df[<span class="st">"quantity"</span>] == 0, <span class="st">"unit_price"</span>] = 0.0`, en: `<span class="cm"># By position vs. by label</span>
<span class="fn">print</span>(df.<span class="fn">iloc</span>[0:3])        <span class="cm"># the first 3 rows (end excluded)</span>
<span class="fn">print</span>(df.<span class="fn">loc</span>[0:3])         <span class="cm"># indices 0..3 = 4 rows (inclusive)</span>
<span class="fn">print</span>(df.<span class="fn">iloc</span>[:5, [1, 2]])  <span class="cm"># the first 5 rows, columns 1 and 2</span>

<span class="cm"># Boolean filtering + selecting columns together</span>
big = df.<span class="fn">loc</span>[
    (df[<span class="st">"quantity"</span>] &gt;= 5) &amp; (df[<span class="st">"city"</span>].<span class="fn">isin</span>([<span class="st">"Casablanca"</span>, <span class="st">"Rabat"</span>])),
    [<span class="st">"order_id"</span>, <span class="st">"city"</span>, <span class="st">"quantity"</span>],
]
<span class="fn">print</span>(big.<span class="fn">head</span>())

<span class="cm"># The same thing with query — shorter</span>
threshold = 5
big2 = df.<span class="fn">query</span>(<span class="st">"quantity &gt;= @threshold and city in ['Casablanca', 'Rabat']"</span>)

<span class="cm"># Conditional assignment: a single loc statement (no chaining)</span>
df.<span class="fn">loc</span>[df[<span class="st">"quantity"</span>] == 0, <span class="st">"unit_price"</span>] = 0.0` },
        quiz: {
            q: {
                ar: "<code>df.loc[2:5]</code> و<code>df.iloc[2:5]</code> على جدول بفهرس افتراضي (0، 1، 2…). كم صفّاً يُرجع كلٌّ منهما؟",
                en: "<code>df.loc[2:5]</code> and <code>df.iloc[2:5]</code> on a table with the default index (0, 1, 2…). How many rows does each return?"
            },
            options: {
                ar: [
                    "كلاهما 3 صفوف",
                    "<code>loc</code> يُرجع 4 صفوف (2، 3، 4، 5) و<code>iloc</code> يُرجع 3 (المواضع 2، 3، 4)",
                    "كلاهما 4 صفوف",
                    "<code>loc</code> يُرجع 3 و<code>iloc</code> يُرجع 4"
                ],
                en: [
                    "Both 3 rows",
                    "<code>loc</code> returns 4 rows (2, 3, 4, 5) and <code>iloc</code> returns 3 (positions 2, 3, 4)",
                    "Both 4 rows",
                    "<code>loc</code> returns 3 and <code>iloc</code> returns 4"
                ]
            },
            correct: 1,
            explanation: {
                ar: "<code>loc</code> يختار بالتسمية ونهايته <strong>شاملة</strong>، فـ 2:5 = الفهارس 2 و3 و4 و5. <code>iloc</code> يختار بالموضع ونهايته <strong>غير شاملة</strong> مثل شرائح بايثون، فـ 2:5 = المواضع 2 و3 و4. هذا الفرق مصدر أخطاء صامتة كثيرة.",
                en: "<code>loc</code> selects by label with an <strong>inclusive</strong> end, so 2:5 = indexes 2, 3, 4 and 5. <code>iloc</code> selects by position with an <strong>exclusive</strong> end like Python slices, so 2:5 = positions 2, 3 and 4. This difference causes many silent bugs."
            }
        }
    },

    {
        title: {
            ar: "إنشاء الأعمدة وتحويلها: العمليات المتّجهة وmap وapply",
            en: "Creating and transforming columns: vectorized ops, map and apply"
        },
        body: {
            ar: `
<p>نادراً ما يحوي الملف الخام العمود الذي تريد تحليله مباشرة. لديك <code>quantity</code> و<code>unit_price</code> وتريد <code>revenue</code>. لديك تاريخ وتريد الشهر. لديك مدينة وتريد المنطقة. كل ذلك عمود جديد مشتقّ من الموجود.</p>

<h3>الطريقة الأولى والأفضل: عملية متّجهة</h3>

<p><code>df["revenue"] = df["quantity"] * df["unit_price"]</code> — Pandas تضرب عنصراً بعنصر على كل الصفوف دفعة واحدة بسرعة NumPy. تعمل مع كل العمليات الحسابية والمقارنات ودوال مثل <code>.round()</code> و<code>.clip()</code>.</p>

<h3>map: تحويل قيمة‑بقيمة على Series</h3>

<p>لتبديل التسميات: <code>df["region"] = df["city"].map({"Casa": "Center", "Rabat": "North"})</code>. يأخذ قاموساً أو دالة ويُطبَّق على كل قيمة. القيم غير الموجودة في القاموس تصبح <code>NaN</code>.</p>

<h3>apply: دالة عامة</h3>

<p>على Series: <code>df["name"].apply(len)</code>. على DataFrame بمحور: <code>df.apply(func, axis=1)</code> يمرّر كل صفّ كـ Series — مفيد حين تحتاج عدّة أعمدة معاً في منطق لا يُعبَّر عنه متّجهاً. لكنه <strong>حلقة مخفيّة</strong>: بطيء على ملايين الصفوف. جرّب الصياغة المتّجهة أولاً.</p>

<h3>التصنيف: pd.cut</h3>

<p>تحويل رقمي إلى فئات مرتّبة: <code>pd.cut(df["revenue"], bins=[0, 100, 500, float("inf")], labels=["small", "medium", "large"])</code>.</p>

<h3>assign: سلسلة نظيفة</h3>

<p><code>df.assign(revenue=lambda d: d.quantity * d.unit_price)</code> يُرجع نسخة بأعمدة مضافة — مناسب للسلاسل الطويلة دون تعديل الأصل.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>استخدام <code>apply(axis=1)</code> لعملية بسيطة كالضرب</strong> — أبطأ عشرات المرّات من <code>df.a * df.b</code>.</li>
    <li><strong>نسيان أن <code>map</code> بقاموس ناقص يُنتج <code>NaN</code> صامتاً.</strong></li>
    <li><strong>تعديل عمود داخل دالة <code>apply</code></strong> وتوقّع أن يؤثّر في الأصل.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>العمليات المتّجهة أولاً: <code>df["c"] = df["a"] * df["b"]</code></li>
    <li><code>map</code> لتبديل القيم من قاموس/دالة على Series</li>
    <li><code>apply(axis=1)</code> للمنطق متعدّد الأعمدة فقط — حلقة بطيئة</li>
    <li><code>pd.cut</code> رقم ← فئات؛ <code>assign</code> لسلسلة أعمدة نظيفة</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>أضف: (1) <code>revenue = quantity * unit_price</code> متّجهاً، (2) <code>month</code> من <code>order_date.dt.month</code>، (3) <code>size</code> عبر <code>pd.cut</code> على <code>revenue</code> بحدود 100 و500، (4) عمود <code>review</code> صحيح إذا <code>quantity &gt; 20</code> و<code>revenue &gt; 1000</code>. قِس أيّها احتاج <code>apply</code> فعلاً.</p>
`,
            en: `
<p>The raw file rarely holds the exact column you want to analyze. You have <code>quantity</code> and <code>unit_price</code> and want <code>revenue</code>. You have a date and want the month. You have a city and want the region. All of that is a new column derived from existing ones.</p>

<h3>The first and best way: a vectorized operation</h3>

<p><code>df["revenue"] = df["quantity"] * df["unit_price"]</code> — Pandas multiplies element by element across all rows at once, at NumPy speed. It works with every arithmetic and comparison operator and with methods like <code>.round()</code> and <code>.clip()</code>.</p>

<h3>map: value-by-value transform on a Series</h3>

<p>To swap labels: <code>df["region"] = df["city"].map({"Casa": "Center", "Rabat": "North"})</code>. It takes a dict or a function and applies to each value. Values absent from the dict become <code>NaN</code>.</p>

<h3>apply: a general function</h3>

<p>On a Series: <code>df["name"].apply(len)</code>. On a DataFrame with an axis: <code>df.apply(func, axis=1)</code> passes each row as a Series — useful when you need several columns together in logic that can't be vectorized. But it is a <strong>hidden loop</strong>: slow on millions of rows. Try the vectorized form first.</p>

<h3>Binning: pd.cut</h3>

<p>Turn a number into ordered categories: <code>pd.cut(df["revenue"], bins=[0, 100, 500, float("inf")], labels=["small", "medium", "large"])</code>.</p>

<h3>assign: a clean chain</h3>

<p><code>df.assign(revenue=lambda d: d.quantity * d.unit_price)</code> returns a copy with columns added — good for long chains without mutating the original.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Using <code>apply(axis=1)</code> for a simple operation like multiplication</strong> — tens of times slower than <code>df.a * df.b</code>.</li>
    <li><strong>Forgetting that <code>map</code> with an incomplete dict silently produces <code>NaN</code>.</strong></li>
    <li><strong>Mutating a column inside an <code>apply</code> function</strong> and expecting it to affect the original.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>Vectorized operations first: <code>df["c"] = df["a"] * df["b"]</code></li>
    <li><code>map</code> to swap values from a dict/function on a Series</li>
    <li><code>apply(axis=1)</code> only for multi-column logic — a slow loop</li>
    <li><code>pd.cut</code> number ← categories; <code>assign</code> for a clean column chain</li>
</ul>

<h3>Exercise</h3>

<p>Add: (1) <code>revenue = quantity * unit_price</code> vectorized, (2) <code>month</code> from <code>order_date.dt.month</code>, (3) <code>size</code> via <code>pd.cut</code> on <code>revenue</code> at 100 and 500, (4) a <code>review</code> column true when <code>quantity &gt; 20</code> and <code>revenue &gt; 1000</code>. Measure which one actually needed <code>apply</code>.</p>
`
        },
        code: { ar: `<span class="cm"># 1) عملية متّجهة — الأسرع والأوضح</span>
df[<span class="st">"revenue"</span>] = df[<span class="st">"quantity"</span>] * df[<span class="st">"unit_price"</span>]

<span class="cm"># 2) map: قاموس تبديل على عمود</span>
df[<span class="st">"region"</span>] = df[<span class="st">"city"</span>].<span class="fn">map</span>({
    <span class="st">"Casablanca"</span>: <span class="st">"Center"</span>, <span class="st">"Rabat"</span>: <span class="st">"North"</span>, <span class="st">"Fes"</span>: <span class="st">"Center"</span>,
})

<span class="cm"># 3) pd.cut: رقم ← فئات مرتّبة</span>
df[<span class="st">"size"</span>] = pd.<span class="fn">cut</span>(
    df[<span class="st">"revenue"</span>],
    bins=[0, 100, 500, <span class="fn">float</span>(<span class="st">"inf"</span>)],
    labels=[<span class="st">"small"</span>, <span class="st">"medium"</span>, <span class="st">"large"</span>],
)

<span class="cm"># 4) apply(axis=1): فقط حين تحتاج عدّة أعمدة في منطق واحد</span>
<span class="kw">def</span> <span class="fn">needs_review</span>(row):
    <span class="kw">return</span> row[<span class="st">"quantity"</span>] &gt; 20 <span class="kw">and</span> row[<span class="st">"revenue"</span>] &gt; 1000

df[<span class="st">"review"</span>] = df.<span class="fn">apply</span>(needs_review, axis=1)

<span class="cm"># نفس المنطق متّجهاً — أسرع بكثير، فضّله</span>
df[<span class="st">"review"</span>] = (df[<span class="st">"quantity"</span>] &gt; 20) &amp; (df[<span class="st">"revenue"</span>] &gt; 1000)`, en: `<span class="cm"># 1) A vectorized operation — the fastest and clearest</span>
df[<span class="st">"revenue"</span>] = df[<span class="st">"quantity"</span>] * df[<span class="st">"unit_price"</span>]

<span class="cm"># 2) map: a lookup dict applied to a column</span>
df[<span class="st">"region"</span>] = df[<span class="st">"city"</span>].<span class="fn">map</span>({
    <span class="st">"Casablanca"</span>: <span class="st">"Center"</span>, <span class="st">"Rabat"</span>: <span class="st">"North"</span>, <span class="st">"Fes"</span>: <span class="st">"Center"</span>,
})

<span class="cm"># 3) pd.cut: a number ← ordered categories</span>
df[<span class="st">"size"</span>] = pd.<span class="fn">cut</span>(
    df[<span class="st">"revenue"</span>],
    bins=[0, 100, 500, <span class="fn">float</span>(<span class="st">"inf"</span>)],
    labels=[<span class="st">"small"</span>, <span class="st">"medium"</span>, <span class="st">"large"</span>],
)

<span class="cm"># 4) apply(axis=1): only when you need several columns in one piece of logic</span>
<span class="kw">def</span> <span class="fn">needs_review</span>(row):
    <span class="kw">return</span> row[<span class="st">"quantity"</span>] &gt; 20 <span class="kw">and</span> row[<span class="st">"revenue"</span>] &gt; 1000

df[<span class="st">"review"</span>] = df.<span class="fn">apply</span>(needs_review, axis=1)

<span class="cm"># The same logic, vectorized — much faster, prefer it</span>
df[<span class="st">"review"</span>] = (df[<span class="st">"quantity"</span>] &gt; 20) &amp; (df[<span class="st">"revenue"</span>] &gt; 1000)` },
        quiz: {
            q: {
                ar: "تريد عمود <code>total = price * quantity</code> لمليون صفّ. أي طريقة أسرع بفارق كبير؟",
                en: "You want a <code>total = price * quantity</code> column for a million rows. Which way is far faster?"
            },
            options: {
                ar: [
                    "<code>df.apply(lambda row: row[\"price\"] * row[\"quantity\"], axis=1)</code>",
                    "<code>df[\"price\"] * df[\"quantity\"]</code>",
                    "حلقة <code>for</code> على <code>df.iterrows()</code>",
                    "الثلاث متساوية"
                ],
                en: [
                    "<code>df.apply(lambda row: row[\"price\"] * row[\"quantity\"], axis=1)</code>",
                    "<code>df[\"price\"] * df[\"quantity\"]</code>",
                    "a <code>for</code> loop over <code>df.iterrows()</code>",
                    "all three are equal"
                ]
            },
            correct: 1,
            explanation: {
                ar: "<code>df[\"price\"] * df[\"quantity\"]</code> عملية متّجهة تنفّذها Pandas في كود مُصرَّف على كامل العمود دفعة واحدة. <code>apply(axis=1)</code> و<code>iterrows()</code> كلاهما حلقة بايثون على الصفوف — أبطأ عشرات إلى مئات المرّات. القاعدة: جرّب المتّجه أولاً.",
                en: "<code>df[\"price\"] * df[\"quantity\"]</code> is a vectorized operation Pandas runs in compiled code over the whole column at once. <code>apply(axis=1)</code> and <code>iterrows()</code> are both Python loops over rows — tens to hundreds of times slower. The rule: try vectorized first."
            }
        }
    },

    {
        title: {
            ar: "الترتيب والرتب: sort_values وnlargest وrank",
            en: "Sorting and ranking: sort_values, nlargest and rank"
        },
        body: {
            ar: `
<p>«ما أعلى 10 مدن مبيعاً؟» «رتّب الطلبات من الأغلى للأرخص.» «في أي رتبة يقع هذا الطالب؟» أسئلة ترتيب يومية، ولكلٍّ منها أداة أنسب.</p>

<h3>sort_values: الترتيب الأساسي</h3>

<p><code>df.sort_values("revenue")</code> تصاعدياً، <code>ascending=False</code> تنازلياً. عدّة مفاتيح: <code>df.sort_values(["city", "revenue"], ascending=[True, False])</code> — رتّب بالمدينة، ثم داخل كل مدينة بالإيراد تنازلياً. <code>na_position="first"</code> لمكان القيم المفقودة.</p>

<h3>الفهرس بعد الترتيب</h3>

<p><code>sort_values</code> يُبقي فهرس كل صفّ الأصلي (فيصبح مبعثراً). إذا احتجت ترقيماً جديداً 0، 1، 2 أضف <code>.reset_index(drop=True)</code>.</p>

<h3>nlargest / nsmallest: القمّة مباشرة</h3>

<p><code>df.nlargest(10, "revenue")</code> أعلى 10 صفوف حسب الإيراد — أوضح وأسرع من <code>sort_values(...).head(10)</code> لأنه لا يرتّب الجدول كله. يقبل عدّة أعمدة لفضّ التعادل.</p>

<h3>idxmax / idxmin</h3>

<p><code>df["revenue"].idxmax()</code> يعطي <em>فهرس</em> الصفّ صاحب أعلى إيراد لا القيمة نفسها. <code>df.loc[df["revenue"].idxmax()]</code> = ذلك الصفّ كاملاً.</p>

<h3>rank: الرتبة لا الترتيب</h3>

<p><code>df["revenue"].rank(ascending=False)</code> يعطي لكل صفّ رقمه في الترتيب دون تحريكه. <code>method="dense"</code> لرتب متتالية بلا فجوات عند التعادل (الافتراضي <code>average</code>). مفيد لأعمدة «التصنيف» و«المئين».</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>توقّع أن <code>sort_values</code> يعدّل <code>df</code></strong> — هو يُرجع نسخة؛ أعِد الإسناد أو <code>inplace=True</code>.</li>
    <li><strong>استخدام <code>sort_values().head(n)</code></strong> على جدول ضخم حيث يكفي <code>nlargest(n, ...)</code>.</li>
    <li><strong>الخلط بين <code>idxmax</code> (فهرس) و<code>max</code> (قيمة).</strong></li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>sort_values(by, ascending, na_position)</code> — عدّة مفاتيح بقائمة <code>ascending</code></li>
    <li><code>nlargest/nsmallest(n, col)</code> أسرع من ترتيب كامل للقمّة</li>
    <li><code>idxmax/idxmin</code> يعطي الفهرس؛ ادمجه مع <code>.loc</code> للصفّ كاملاً</li>
    <li><code>rank(method="dense")</code> يعطي الرتبة دون إعادة ترتيب</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>من جدول المبيعات: (1) أغلى 5 طلبات بـ <code>nlargest</code>، (2) رتّب بالمدينة تصاعدياً ثم بالإيراد تنازلياً، (3) صفّ الطلب الأعلى إيراداً كاملاً عبر <code>idxmax</code>، (4) أضف عمود <code>revenue_rank</code> بـ <code>rank</code> تنازلياً بطريقة <code>dense</code>.</p>
`,
            en: `
<p>"What are the top 10 cities by sales?" "Sort orders from most to least expensive." "Where does this student rank?" Everyday ordering questions, each with a best-fit tool.</p>

<h3>sort_values: the basic sort</h3>

<p><code>df.sort_values("revenue")</code> ascending, <code>ascending=False</code> descending. Multiple keys: <code>df.sort_values(["city", "revenue"], ascending=[True, False])</code> — sort by city, then within each city by revenue descending. <code>na_position="first"</code> for where missing values go.</p>

<h3>The index after sorting</h3>

<p><code>sort_values</code> keeps each row's original index (which becomes scrambled). If you need fresh 0, 1, 2 numbering add <code>.reset_index(drop=True)</code>.</p>

<h3>nlargest / nsmallest: the top directly</h3>

<p><code>df.nlargest(10, "revenue")</code> the top 10 rows by revenue — clearer and faster than <code>sort_values(...).head(10)</code> because it doesn't sort the whole table. Accepts multiple columns for tie-breaking.</p>

<h3>idxmax / idxmin</h3>

<p><code>df["revenue"].idxmax()</code> gives the <em>index</em> of the row with the highest revenue, not the value. <code>df.loc[df["revenue"].idxmax()]</code> = that whole row.</p>

<h3>rank: rank, not order</h3>

<p><code>df["revenue"].rank(ascending=False)</code> gives each row its position in the order without moving it. <code>method="dense"</code> for consecutive ranks with no gaps on ties (default is <code>average</code>). Useful for "tier" and "percentile" columns.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>Expecting <code>sort_values</code> to modify <code>df</code></strong> — it returns a copy; reassign or use <code>inplace=True</code>.</li>
    <li><strong>Using <code>sort_values().head(n)</code></strong> on a huge table where <code>nlargest(n, ...)</code> suffices.</li>
    <li><strong>Confusing <code>idxmax</code> (an index) with <code>max</code> (a value).</strong></li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>sort_values(by, ascending, na_position)</code> — multiple keys with an <code>ascending</code> list</li>
    <li><code>nlargest/nsmallest(n, col)</code> is faster than a full sort for the top</li>
    <li><code>idxmax/idxmin</code> gives the index; combine with <code>.loc</code> for the whole row</li>
    <li><code>rank(method="dense")</code> gives the rank without reordering</li>
</ul>

<h3>Exercise</h3>

<p>From the sales table: (1) the 5 most expensive orders via <code>nlargest</code>, (2) sort by city ascending then revenue descending, (3) the whole highest-revenue order row via <code>idxmax</code>, (4) add a <code>revenue_rank</code> column with <code>rank</code> descending, method <code>dense</code>.</p>
`
        },
        code: { ar: `<span class="cm"># ترتيب بمفتاحين: مدينة تصاعدياً، ثم إيراد تنازلياً داخلها</span>
ranked = df.<span class="fn">sort_values</span>(
    [<span class="st">"city"</span>, <span class="st">"revenue"</span>],
    ascending=[<span class="kw">True</span>, <span class="kw">False</span>],
).<span class="fn">reset_index</span>(drop=<span class="kw">True</span>)

<span class="cm"># أعلى 5 طلبات — بلا ترتيب الجدول كله</span>
top5 = df.<span class="fn">nlargest</span>(5, <span class="st">"revenue"</span>)

<span class="cm"># الصفّ صاحب أعلى إيراد (idxmax يعطي الفهرس لا القيمة)</span>
best = df.<span class="fn">loc</span>[df[<span class="st">"revenue"</span>].<span class="fn">idxmax</span>()]
<span class="fn">print</span>(best[<span class="st">"city"</span>], best[<span class="st">"revenue"</span>])

<span class="cm"># الرتبة دون تحريك الصفوف</span>
df[<span class="st">"revenue_rank"</span>] = df[<span class="st">"revenue"</span>].<span class="fn">rank</span>(ascending=<span class="kw">False</span>, method=<span class="st">"dense"</span>)
<span class="fn">print</span>(df[[<span class="st">"order_id"</span>, <span class="st">"revenue"</span>, <span class="st">"revenue_rank"</span>]].<span class="fn">head</span>())`, en: `<span class="cm"># Sorting by two keys: city ascending, then revenue descending within it</span>
ranked = df.<span class="fn">sort_values</span>(
    [<span class="st">"city"</span>, <span class="st">"revenue"</span>],
    ascending=[<span class="kw">True</span>, <span class="kw">False</span>],
).<span class="fn">reset_index</span>(drop=<span class="kw">True</span>)

<span class="cm"># The top 5 orders — without sorting the whole table</span>
top5 = df.<span class="fn">nlargest</span>(5, <span class="st">"revenue"</span>)

<span class="cm"># The row with the highest revenue (idxmax gives the index, not the value)</span>
best = df.<span class="fn">loc</span>[df[<span class="st">"revenue"</span>].<span class="fn">idxmax</span>()]
<span class="fn">print</span>(best[<span class="st">"city"</span>], best[<span class="st">"revenue"</span>])

<span class="cm"># Ranking without moving the rows</span>
df[<span class="st">"revenue_rank"</span>] = df[<span class="st">"revenue"</span>].<span class="fn">rank</span>(ascending=<span class="kw">False</span>, method=<span class="st">"dense"</span>)
<span class="fn">print</span>(df[[<span class="st">"order_id"</span>, <span class="st">"revenue"</span>, <span class="st">"revenue_rank"</span>]].<span class="fn">head</span>())` },
        quiz: {
            q: {
                ar: "تريد «أغلى 20 طلباً» من جدول فيه مليونا صفّ. أي خيار الأنسب؟",
                en: "You want the \"20 most expensive orders\" from a table of two million rows. Which option is best?"
            },
            options: {
                ar: [
                    "<code>df.sort_values(\"revenue\", ascending=False).head(20)</code>",
                    "<code>df.nlargest(20, \"revenue\")</code>",
                    "<code>df[\"revenue\"].max()</code> عشرين مرة",
                    "<code>df.rank().head(20)</code>"
                ],
                en: [
                    "<code>df.sort_values(\"revenue\", ascending=False).head(20)</code>",
                    "<code>df.nlargest(20, \"revenue\")</code>",
                    "<code>df[\"revenue\"].max()</code> twenty times",
                    "<code>df.rank().head(20)</code>"
                ]
            },
            correct: 1,
            explanation: {
                ar: "<code>nlargest(20, ...)</code> يحتاج فقط إيجاد أكبر 20 قيمة — عمل خطّي تقريباً بلا ترتيب كامل. <code>sort_values(...).head(20)</code> يرتّب المليونَي صفّ ثم يرمي كل شيء إلا 20 — عمل مهدور. النتيجة نفسها، لكن <code>nlargest</code> أوضح نيّةً وأسرع.",
                en: "<code>nlargest(20, ...)</code> only needs to find the 20 largest values — near-linear work with no full sort. <code>sort_values(...).head(20)</code> sorts all two million rows then discards all but 20 — wasted work. Same result, but <code>nlargest</code> states intent more clearly and runs faster."
            }
        }
    },

    {
        title: {
            ar: "التجميع: groupby وagg",
            en: "Grouping: groupby and agg"
        },
        body: {
            ar: `
<p>أهم سؤال تحليلي على الإطلاق: «كم لكلّ…؟». إجمالي المبيعات <strong>لكل مدينة</strong>، متوسط الدرجة <strong>لكل صفّ</strong>، عدد الطلبات <strong>لكل شهر</strong>. النمط واحد: قسّم الصفوف إلى مجموعات، احسب رقماً لكل مجموعة، اجمع النتائج في جدول. هذا <code>groupby</code>.</p>

<h3>split‑apply‑combine</h3>

<p><code>df.groupby("city")["revenue"].sum()</code>: (1) قسّم الصفوف حسب <code>city</code>، (2) طبّق <code>sum</code> على <code>revenue</code> في كل مجموعة، (3) ادمج في Series فهرسه المدن. غيّر الدالة: <code>.mean()</code>، <code>.count()</code>، <code>.max()</code>، <code>.median()</code>.</p>

<h3>agg: عدّة إحصاءات دفعة واحدة</h3>

<p><code>df.groupby("city").agg(total=("revenue", "sum"), orders=("order_id", "count"), avg=("revenue", "mean"))</code> — كل سطر يعرّف عمود ناتج: (العمود المصدر، الدالة). النتيجة DataFrame مرتّب جاهز للتقرير.</p>

<h3>as_index وreset_index</h3>

<p>النتيجة فهرسها مفتاح التجميع افتراضياً. <code>groupby("city", as_index=False)</code> أو <code>.reset_index()</code> يعيد <code>city</code> عموداً عادياً — أسهل للدمج والرسم لاحقاً.</p>

<h3>التجميع بعدّة مفاتيح</h3>

<p><code>df.groupby(["city", "category"])["revenue"].sum()</code> يعطي فهرساً هرمياً لكل تركيبة مدينة×فئة. <code>.unstack()</code> يحوّل أحد المستويات إلى أعمدة (جدول محوري).</p>

<h3>transform: نتيجة بحجم الأصل</h3>

<p><code>df["city_total"] = df.groupby("city")["revenue"].transform("sum")</code> يضع إجمالي المدينة <strong>بجانب كل صفّ</strong> من صفوفها — لحساب الحصص والنِّسَب: <code>df["share"] = df["revenue"] / df["city_total"]</code>.</p>

<h3>size مقابل count</h3>

<p><code>size</code> يعدّ صفوف المجموعة كلها؛ <code>count</code> يعدّ القيم غير الفارغة في عمود. لو في العمود مفقودات اختلف الرقمان.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong><code>groupby("city").sum()</code> على كل الأعمدة</strong> فيجمع أعمدة لا معنى لجمعها (مثل <code>order_id</code>) — حدّد العمود.</li>
    <li><strong>توقّع أن النتيجة DataFrame</strong> وهي Series (عمود واحد + دالة واحدة).</li>
    <li><strong>الخلط بين <code>count</code> (يتجاهل NaN) و<code>size</code></strong> عند وجود مفقودات.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>groupby(key)[col].func()</code> = قسّم / طبّق / ادمج</li>
    <li><code>.agg(name=(col, func), ...)</code> لعدّة إحصاءات في جدول واحد</li>
    <li><code>as_index=False</code> أو <code>reset_index()</code> لإرجاع المفتاح عموداً</li>
    <li><code>transform</code> يُرجع بحجم الأصل — للنِّسَب والحصص</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>من جدول المبيعات: (1) إجمالي <code>revenue</code> لكل <code>city</code> مرتّباً تنازلياً، (2) جدول <code>agg</code> لكل <code>category</code>: عدد الطلبات ومتوسط الإيراد وأقصاه، (3) عمود <code>city_share</code> = حصّة كل طلب من إجمالي مدينته عبر <code>transform</code>.</p>
`,
            en: `
<p>The single most important analytical question: "how much per…?". Total sales <strong>per city</strong>, average grade <strong>per class</strong>, order count <strong>per month</strong>. The pattern is one: split rows into groups, compute a number per group, combine the results into a table. That is <code>groupby</code>.</p>

<h3>split-apply-combine</h3>

<p><code>df.groupby("city")["revenue"].sum()</code>: (1) split rows by <code>city</code>, (2) apply <code>sum</code> to <code>revenue</code> in each group, (3) combine into a Series indexed by city. Swap the function: <code>.mean()</code>, <code>.count()</code>, <code>.max()</code>, <code>.median()</code>.</p>

<h3>agg: several statistics at once</h3>

<p><code>df.groupby("city").agg(total=("revenue", "sum"), orders=("order_id", "count"), avg=("revenue", "mean"))</code> — each line defines an output column: (source column, function). The result is a tidy DataFrame ready for a report.</p>

<h3>as_index and reset_index</h3>

<p>By default the result is indexed by the grouping key. <code>groupby("city", as_index=False)</code> or <code>.reset_index()</code> returns <code>city</code> as a normal column — easier to merge and plot later.</p>

<h3>Grouping by multiple keys</h3>

<p><code>df.groupby(["city", "category"])["revenue"].sum()</code> gives a hierarchical index for each city&times;category combination. <code>.unstack()</code> turns one level into columns (a pivot table).</p>

<h3>transform: a result the size of the original</h3>

<p><code>df["city_total"] = df.groupby("city")["revenue"].transform("sum")</code> puts the city's total <strong>next to each of its rows</strong> — for shares and ratios: <code>df["share"] = df["revenue"] / df["city_total"]</code>.</p>

<h3>size vs count</h3>

<p><code>size</code> counts all rows of the group; <code>count</code> counts non-null values in a column. If the column has missing values, the two numbers differ.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong><code>groupby("city").sum()</code> over every column</strong> sums columns that shouldn't be summed (like <code>order_id</code>) — name the column.</li>
    <li><strong>Expecting a DataFrame</strong> when the result is a Series (one column + one function).</li>
    <li><strong>Confusing <code>count</code> (ignores NaN) with <code>size</code></strong> when missing values exist.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>groupby(key)[col].func()</code> = split / apply / combine</li>
    <li><code>.agg(name=(col, func), ...)</code> for several statistics in one table</li>
    <li><code>as_index=False</code> or <code>reset_index()</code> to return the key as a column</li>
    <li><code>transform</code> returns original size — for ratios and shares</li>
</ul>

<h3>Exercise</h3>

<p>From the sales table: (1) total <code>revenue</code> per <code>city</code> sorted descending, (2) an <code>agg</code> table per <code>category</code>: order count, mean revenue and max revenue, (3) a <code>city_share</code> column = each order's share of its city's total via <code>transform</code>.</p>
`
        },
        code: { ar: `<span class="cm"># split-apply-combine الأساسي</span>
by_city = df.<span class="fn">groupby</span>(<span class="st">"city"</span>)[<span class="st">"revenue"</span>].<span class="fn">sum</span>().<span class="fn">sort_values</span>(ascending=<span class="kw">False</span>)
<span class="fn">print</span>(by_city.<span class="fn">head</span>())

<span class="cm"># عدّة إحصاءات في جدول واحد جاهز للتقرير</span>
summary = df.<span class="fn">groupby</span>(<span class="st">"category"</span>, as_index=<span class="kw">False</span>).<span class="fn">agg</span>(
    orders=(<span class="st">"order_id"</span>, <span class="st">"count"</span>),
    total_revenue=(<span class="st">"revenue"</span>, <span class="st">"sum"</span>),
    avg_revenue=(<span class="st">"revenue"</span>, <span class="st">"mean"</span>),
)
<span class="fn">print</span>(summary)

<span class="cm"># تجميع بمفتاحين + تحويله لجدول محوري</span>
pivot = df.<span class="fn">groupby</span>([<span class="st">"city"</span>, <span class="st">"category"</span>])[<span class="st">"revenue"</span>].<span class="fn">sum</span>().<span class="fn">unstack</span>(fill_value=0)

<span class="cm"># transform: إجمالي المدينة بجانب كل صفّ ← حصّة الطلب</span>
df[<span class="st">"city_total"</span>] = df.<span class="fn">groupby</span>(<span class="st">"city"</span>)[<span class="st">"revenue"</span>].<span class="fn">transform</span>(<span class="st">"sum"</span>)
df[<span class="st">"city_share"</span>] = df[<span class="st">"revenue"</span>] / df[<span class="st">"city_total"</span>]`, en: `<span class="cm"># The basic split-apply-combine</span>
by_city = df.<span class="fn">groupby</span>(<span class="st">"city"</span>)[<span class="st">"revenue"</span>].<span class="fn">sum</span>().<span class="fn">sort_values</span>(ascending=<span class="kw">False</span>)
<span class="fn">print</span>(by_city.<span class="fn">head</span>())

<span class="cm"># Several stats in one report-ready table</span>
summary = df.<span class="fn">groupby</span>(<span class="st">"category"</span>, as_index=<span class="kw">False</span>).<span class="fn">agg</span>(
    orders=(<span class="st">"order_id"</span>, <span class="st">"count"</span>),
    total_revenue=(<span class="st">"revenue"</span>, <span class="st">"sum"</span>),
    avg_revenue=(<span class="st">"revenue"</span>, <span class="st">"mean"</span>),
)
<span class="fn">print</span>(summary)

<span class="cm"># Grouping by two keys + turning it into a pivot table</span>
pivot = df.<span class="fn">groupby</span>([<span class="st">"city"</span>, <span class="st">"category"</span>])[<span class="st">"revenue"</span>].<span class="fn">sum</span>().<span class="fn">unstack</span>(fill_value=0)

<span class="cm"># transform: the city's total next to every row ← the order's share</span>
df[<span class="st">"city_total"</span>] = df.<span class="fn">groupby</span>(<span class="st">"city"</span>)[<span class="st">"revenue"</span>].<span class="fn">transform</span>(<span class="st">"sum"</span>)
df[<span class="st">"city_share"</span>] = df[<span class="st">"revenue"</span>] / df[<span class="st">"city_total"</span>]` },
        quiz: {
            q: {
                ar: "<code>df.groupby(\"city\")[\"order_id\"].count()</code> مقابل <code>df.groupby(\"city\").size()</code> — متى يختلف الرقمان؟",
                en: "<code>df.groupby(\"city\")[\"order_id\"].count()</code> vs <code>df.groupby(\"city\").size()</code> — when do the numbers differ?"
            },
            options: {
                ar: [
                    "لا يختلفان أبداً",
                    "يختلفان حين يحوي <code>order_id</code> قيماً مفقودة: <code>count</code> يتخطّاها و<code>size</code> يعدّ كل صفوف المجموعة",
                    "يختلفان دائماً بمقدار 1",
                    "<code>size</code> لا يعمل مع <code>groupby</code>"
                ],
                en: [
                    "They never differ",
                    "They differ when <code>order_id</code> has missing values: <code>count</code> skips them and <code>size</code> counts every row of the group",
                    "They always differ by 1",
                    "<code>size</code> doesn't work with <code>groupby</code>"
                ]
            },
            correct: 1,
            explanation: {
                ar: "<code>size</code> يعدّ عدد صفوف كل مجموعة بغضّ النظر عن المحتوى. <code>count</code> يعدّ القيم <strong>غير الفارغة</strong> في العمود المحدَّد. فإذا كان <code>order_id</code> مكتملاً تساوى الرقمان؛ وإذا فيه مفقودات صار <code>count</code> أصغر. لعدّ حجم المجموعة استخدم <code>size</code>.",
                en: "<code>size</code> counts the rows of each group regardless of content. <code>count</code> counts the <strong>non-null</strong> values in the named column. If <code>order_id</code> is complete they match; if it has gaps <code>count</code> is smaller. To count group size, use <code>size</code>."
            }
        }
    },

    {
        title: {
            ar: "الدمج: merge وconcat",
            en: "Combining tables: merge and concat"
        },
        body: {
            ar: `
<p>بياناتك الحقيقية موزّعة على جداول: جدول الطلبات فيه <code>customer_id</code> فقط، واسم العميل ومدينته في جدول العملاء. لتحليل «المبيعات حسب مدينة العميل» تحتاج ضمّ الجدولين على المفتاح المشترك. هذا <code>merge</code>.</p>

<h3>merge: الضمّ على مفتاح</h3>

<p><code>orders.merge(customers, on="customer_id")</code> يطابق كل صفّ طلب بصفّ العميل الذي يحمل نفس <code>customer_id</code>، وينتج جدولاً واحداً بأعمدة الاثنين. لو اختلف اسم المفتاح: <code>left_on="cust", right_on="id"</code>.</p>

<h3>أنواع الوصل (how)</h3>

<ul>
    <li><code>inner</code> (الافتراضي): الصفوف التي لها مطابقة في <strong>الجانبين</strong> فقط.</li>
    <li><code>left</code>: كل صفوف اليسار، وما لا مطابقة له تُملأ أعمدته اليمنى بـ <code>NaN</code>.</li>
    <li><code>right</code>: العكس. <code>outer</code>: اتحاد الجانبين.</li>
</ul>

<p>اختيار النوع الخاطئ يحذف صفوفاً بصمت أو يُدخِل <code>NaN</code> غير متوقّع.</p>

<h3>التحقّق: validate وindicator</h3>

<p><code>validate="many_to_one"</code> يرمي خطأً إذا لم يكن المفتاح فريداً في جدول العملاء — يحميك من <strong>تضخّم الصفوف</strong>. <code>indicator=True</code> يضيف عمود <code>_merge</code> يبيّن مصدر كل صفّ (<code>both</code> / <code>left_only</code> / <code>right_only</code>) — ممتاز للتشخيص.</p>

<h3>concat: التكديس لا المطابقة</h3>

<p><code>pd.concat([jan, feb, mar], ignore_index=True)</code> يرصّ جداول بنفس الأعمدة فوق بعضها (دمج ملفات شهرية). <code>axis=1</code> يلصقها جنباً إلى جنب محاذياً بالفهرس. لا مفتاح ولا مطابقة — مجرّد لصق.</p>

<h3>أخطاء شائعة</h3>

<ul>
    <li><strong>مفتاح غير فريد في الجانبين</strong> ← حاصل ضرب جزئي: 3 طلبات × 2 عميل بنفس <code>id</code> = 6 صفوف.</li>
    <li><strong><code>inner</code> صامت يحذف الطلبات بلا عميل مطابق</strong> — راقب عدد الصفوف قبل/بعد.</li>
    <li><strong><code>concat</code> لجداول أعمدتها غير متطابقة</strong> يملأ الفجوات <code>NaN</code> بلا تحذير.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li><code>merge(other, on, how)</code> يضمّ جدولين على مفتاح؛ <code>how</code> يحدّد مصير غير المتطابق</li>
    <li><code>inner</code> = التقاطع، <code>left</code> = كل اليسار + <code>NaN</code>، <code>outer</code> = الاتحاد</li>
    <li><code>validate=</code> و<code>indicator=True</code> يكشفان تضخّم الصفوف والفقد</li>
    <li><code>concat</code> يكدّس / يلصق بلا مطابقة؛ <code>ignore_index=True</code> لترقيم جديد</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>لديك <code>orders</code> (فيه <code>product_id</code>) و<code>products</code> (فيه <code>product_id</code> و<code>cost</code>). (1) اضمم الجدولين بـ <code>left</code> وتحقّق <code>many_to_one</code>، (2) أضف عمود ربح = <code>revenue - cost * quantity</code>، (3) كدّس ملفَّي طلبات شهرين بـ <code>concat</code> وتأكّد أن عدد الصفوف = مجموع الاثنين.</p>
`,
            en: `
<p>Your real data is spread across tables: the orders table has only <code>customer_id</code>, while the customer's name and city live in the customers table. To analyze "sales by customer city" you need to join the two on the shared key. That is <code>merge</code>.</p>

<h3>merge: joining on a key</h3>

<p><code>orders.merge(customers, on="customer_id")</code> matches each order row to the customer row with the same <code>customer_id</code>, producing one table with both sets of columns. If the key names differ: <code>left_on="cust", right_on="id"</code>.</p>

<h3>Join types (how)</h3>

<ul>
    <li><code>inner</code> (default): only rows with a match on <strong>both</strong> sides.</li>
    <li><code>left</code>: every left row; unmatched ones get <code>NaN</code> in the right columns.</li>
    <li><code>right</code>: the reverse. <code>outer</code>: the union of both sides.</li>
</ul>

<p>Choosing the wrong type silently drops rows or introduces unexpected <code>NaN</code>.</p>

<h3>Checking: validate and indicator</h3>

<p><code>validate="many_to_one"</code> raises an error if the key is not unique in the customers table — it protects you from <strong>row explosion</strong>. <code>indicator=True</code> adds a <code>_merge</code> column showing each row's origin (<code>both</code> / <code>left_only</code> / <code>right_only</code>) — great for diagnosis.</p>

<h3>concat: stacking, not matching</h3>

<p><code>pd.concat([jan, feb, mar], ignore_index=True)</code> stacks tables with the same columns on top of one another (merging monthly files). <code>axis=1</code> glues them side by side, aligned by index. No key, no matching — just pasting.</p>

<h3>Common mistakes</h3>

<ul>
    <li><strong>A non-unique key on both sides</strong> ← a partial cross product: 3 orders &times; 2 customers with the same <code>id</code> = 6 rows.</li>
    <li><strong><code>inner</code> silently drops orders with no matching customer</strong> — watch the row count before/after.</li>
    <li><strong><code>concat</code> of tables with mismatched columns</strong> fills the gaps with <code>NaN</code> and no warning.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li><code>merge(other, on, how)</code> joins two tables on a key; <code>how</code> decides the fate of the unmatched</li>
    <li><code>inner</code> = intersection, <code>left</code> = all left + <code>NaN</code>, <code>outer</code> = union</li>
    <li><code>validate=</code> and <code>indicator=True</code> reveal row explosion and losses</li>
    <li><code>concat</code> stacks / glues with no matching; <code>ignore_index=True</code> for fresh numbering</li>
</ul>

<h3>Exercise</h3>

<p>You have <code>orders</code> (with <code>product_id</code>) and <code>products</code> (with <code>product_id</code> and <code>cost</code>). (1) join with <code>left</code> and validate <code>many_to_one</code>, (2) add a profit column = <code>revenue - cost * quantity</code>, (3) stack two months' order files with <code>concat</code> and confirm the row count equals the sum of the two.</p>
`
        },
        code: { ar: `orders = pd.<span class="fn">DataFrame</span>({
    <span class="st">"order_id"</span>:    [1, 2, 3, 4],
    <span class="st">"customer_id"</span>: [10, 11, 10, 99],
    <span class="st">"revenue"</span>:     [240, 180, 300, 90],
})
customers = pd.<span class="fn">DataFrame</span>({
    <span class="st">"customer_id"</span>: [10, 11, 12],
    <span class="st">"city"</span>:        [<span class="st">"Casablanca"</span>, <span class="st">"Rabat"</span>, <span class="st">"Fes"</span>],
})

<span class="cm"># left: نُبقي كل الطلبات؛ الطلب 4 (عميل 99) بلا مدينة ← NaN</span>
merged = orders.<span class="fn">merge</span>(
    customers, on=<span class="st">"customer_id"</span>, how=<span class="st">"left"</span>,
    validate=<span class="st">"many_to_one"</span>,   <span class="cm"># خطأ لو تكرّر customer_id في customers</span>
    indicator=<span class="kw">True</span>,
)
<span class="fn">print</span>(merged[[<span class="st">"order_id"</span>, <span class="st">"city"</span>, <span class="st">"_merge"</span>]])
<span class="cm">#    order_id        city     _merge</span>
<span class="cm"># 0         1  Casablanca       both</span>
<span class="cm"># 3         4         NaN  left_only</span>

<span class="cm"># تكديس ملفّين شهريين فوق بعضهما</span>
all_q1 = pd.<span class="fn">concat</span>([jan_df, feb_df, mar_df], ignore_index=<span class="kw">True</span>)`, en: `orders = pd.<span class="fn">DataFrame</span>({
    <span class="st">"order_id"</span>:    [1, 2, 3, 4],
    <span class="st">"customer_id"</span>: [10, 11, 10, 99],
    <span class="st">"revenue"</span>:     [240, 180, 300, 90],
})
customers = pd.<span class="fn">DataFrame</span>({
    <span class="st">"customer_id"</span>: [10, 11, 12],
    <span class="st">"city"</span>:        [<span class="st">"Casablanca"</span>, <span class="st">"Rabat"</span>, <span class="st">"Fes"</span>],
})

<span class="cm"># left: keep every order; order 4 (customer 99) has no city ← NaN</span>
merged = orders.<span class="fn">merge</span>(
    customers, on=<span class="st">"customer_id"</span>, how=<span class="st">"left"</span>,
    validate=<span class="st">"many_to_one"</span>,   <span class="cm"># errors if customer_id repeats in customers</span>
    indicator=<span class="kw">True</span>,
)
<span class="fn">print</span>(merged[[<span class="st">"order_id"</span>, <span class="st">"city"</span>, <span class="st">"_merge"</span>]])
<span class="cm">#    order_id        city     _merge</span>
<span class="cm"># 0         1  Casablanca       both</span>
<span class="cm"># 3         4         NaN  left_only</span>

<span class="cm"># Stacking monthly files on top of each other</span>
all_q1 = pd.<span class="fn">concat</span>([jan_df, feb_df, mar_df], ignore_index=<span class="kw">True</span>)` },
        quiz: {
            q: {
                ar: "جدول <code>orders</code> فيه 100 صفّ. بعد <code>orders.merge(customers, on=\"customer_id\", how=\"inner\")</code> صار 87 صفاً. ما التفسير الأرجح؟",
                en: "The <code>orders</code> table has 100 rows. After <code>orders.merge(customers, on=\"customer_id\", how=\"inner\")</code> it has 87. What is the likely explanation?"
            },
            options: {
                ar: [
                    "<code>merge</code> يحذف صفوفاً عشوائياً",
                    "13 طلباً تحمل <code>customer_id</code> لا صفّ له في <code>customers</code>، و<code>inner</code> يستبعد ما لا مطابقة له",
                    "<code>customers</code> فيه 87 صفاً فقط",
                    "خطأ في الكود"
                ],
                en: [
                    "<code>merge</code> drops rows at random",
                    "13 orders carry a <code>customer_id</code> with no row in <code>customers</code>, and <code>inner</code> excludes the unmatched",
                    "<code>customers</code> has only 87 rows",
                    "A bug in the code"
                ]
            },
            correct: 1,
            explanation: {
                ar: "<code>inner</code> يُبقي فقط الصفوف التي لها مفتاح مطابق في <strong>كلا</strong> الجدولين. اختفاء 13 صفّاً يعني 13 طلباً بعميل غير مسجّل (أو <code>customer_id</code> مفقود). للاحتفاظ بكل الطلبات مع ترك بيانات العميل فارغة استخدم <code>how=\"left\"</code>. راقب دائماً عدد الصفوف قبل الدمج وبعده.",
                en: "<code>inner</code> keeps only rows with a matching key in <strong>both</strong> tables. Losing 13 rows means 13 orders with an unregistered customer (or a missing <code>customer_id</code>). To keep every order with blank customer data use <code>how=\"left\"</code>. Always check the row count before and after a merge."
            }
        }
    },

    {
        title: {
            ar: "مشروع: تحليل مبيعات متجر بـ Pandas",
            en: "Project: analyzing store sales with Pandas"
        },
        body: {
            ar: `
<p>نجمع كل أدوات المستوى: <code>read_csv</code>، إنشاء الأعمدة، <code>groupby</code>/<code>agg</code>، <code>nlargest</code>، <code>merge</code>، و<code>dt</code>. المدخل ملف <code>sales.csv</code> خام (طلب في كل صفّ)، والمخرج تقرير أرقام يجيب صاحب المتجر عن: كيف تسير المبيعات؟ أين؟ وما الأعلى ربحية؟</p>

<h3>1. التحميل والفحص</h3>

<p><code>pd.read_csv("sales.csv", parse_dates=["order_date"])</code> ثم <code>info()</code> و<code>describe()</code>. تأكّد: لا أعمدة رقمية بنوع <code>object</code>، وانتبه لعدد القيم غير الفارغة.</p>

<h3>2. الأعمدة المشتقّة</h3>

<p><code>revenue = quantity * unit_price</code> متّجهاً. <code>month = order_date.dt.to_period("M")</code> للتجميع الشهري. إن وُجدت قيم <code>quantity &lt;= 0</code> استبعدها بوعي.</p>

<h3>3. الإيراد الشهري (اتجاه)</h3>

<p><code>df.groupby("month")["revenue"].sum()</code> — Series مرتّب زمنياً يكشف النمو أو الهبوط. <code>.pct_change()</code> لنسبة التغيّر شهرياً.</p>

<h3>4. أعلى المدن</h3>

<p><code>df.groupby("city", as_index=False)["revenue"].sum().nlargest(5, "revenue")</code>.</p>

<h3>5. الدمج مع الفئات</h3>

<p>جدول <code>categories</code> فيه <code>category</code> و<code>margin_pct</code>. ادمج بـ <code>left</code> و<code>validate="many_to_one"</code>، ثم <code>profit = revenue * margin_pct</code> ← أي فئة تحقّق أعلى ربح إجمالي؟ (قد تختلف عن الأعلى إيراداً.)</p>

<h3>6. متوسط قيمة الطلب لكل مدينة</h3>

<p><code>df.groupby("city").agg(orders=("order_id", "count"), revenue=("revenue", "sum"), aov=("revenue", "mean"))</code>.</p>

<h3>أخطاء ستقع فيها</h3>

<ul>
    <li>التجميع الشهري على <code>dt.month</code> وحده يخلط يناير 2023 بيناير 2024 — استخدم <code>to_period("M")</code>.</li>
    <li><code>merge</code> يضخّم الصفوف لو <code>categories</code> فيه فئة مكرّرة — <code>validate</code> يمسكها.</li>
    <li>الاكتفاء بالأعلى إيراداً وتجاهل الهامش: منتج كثير المبيعات قد يكون قليل الربح.</li>
</ul>

<h3>لخّص ما تعلمته</h3>

<ul>
    <li>خطّ أنابيب كامل: حمّل ← نظّف ← اشتقّ أعمدة ← جمّع ← ادمج ← قارن</li>
    <li><code>to_period("M")</code> للتجميع الزمني الصحيح</li>
    <li>الإيراد ≠ الربح؛ الدمج مع الهامش يغيّر الترتيب أحياناً</li>
    <li>كل خطوة سطر أو سطران بفضل Pandas — قارن بمشروع المستوى الأول اليدوي</li>
</ul>

<h3>تمرين تطبيقي</h3>

<p>وسّع التقرير: (1) أضف «أفضل فئة في كل مدينة» عبر <code>groupby(["city", "category"])</code> ثم <code>idxmax</code> على المستوى، (2) احسب نسبة الطلبات التي <code>quantity == 1</code> لكل مدينة، (3) صدّر جدول الملخّص إلى <code>report.csv</code> بـ <code>to_csv</code>.</p>
`,
            en: `
<p>We bring together every tool of the module: <code>read_csv</code>, column creation, <code>groupby</code>/<code>agg</code>, <code>nlargest</code>, <code>merge</code>, and <code>dt</code>. The input is a raw <code>sales.csv</code> (one order per row), and the output is a report of numbers answering the store owner: how are sales trending? where? and what is most profitable?</p>

<h3>1. Load and inspect</h3>

<p><code>pd.read_csv("sales.csv", parse_dates=["order_date"])</code> then <code>info()</code> and <code>describe()</code>. Confirm: no numeric columns typed <code>object</code>, and watch the non-null counts.</p>

<h3>2. Derived columns</h3>

<p><code>revenue = quantity * unit_price</code> vectorized. <code>month = order_date.dt.to_period("M")</code> for monthly grouping. If there are <code>quantity &lt;= 0</code> values, exclude them deliberately.</p>

<h3>3. Monthly revenue (trend)</h3>

<p><code>df.groupby("month")["revenue"].sum()</code> — a time-ordered Series that reveals growth or decline. <code>.pct_change()</code> for the month-over-month change.</p>

<h3>4. Top cities</h3>

<p><code>df.groupby("city", as_index=False)["revenue"].sum().nlargest(5, "revenue")</code>.</p>

<h3>5. Merge with categories</h3>

<p>A <code>categories</code> table has <code>category</code> and <code>margin_pct</code>. Merge with <code>left</code> and <code>validate="many_to_one"</code>, then <code>profit = revenue * margin_pct</code> ← which category makes the highest total profit? (May differ from the highest revenue.)</p>

<h3>6. Average order value per city</h3>

<p><code>df.groupby("city").agg(orders=("order_id", "count"), revenue=("revenue", "sum"), aov=("revenue", "mean"))</code>.</p>

<h3>Mistakes you'll make</h3>

<ul>
    <li>Monthly grouping on <code>dt.month</code> alone mixes Jan 2023 with Jan 2024 — use <code>to_period("M")</code>.</li>
    <li><code>merge</code> explodes rows if <code>categories</code> has a duplicate category — <code>validate</code> catches it.</li>
    <li>Stopping at highest revenue and ignoring margin: a high-volume product can be low-profit.</li>
</ul>

<h3>Recap</h3>

<ul>
    <li>A full pipeline: load ← clean ← derive columns ← aggregate ← merge ← compare</li>
    <li><code>to_period("M")</code> for correct time grouping</li>
    <li>Revenue &ne; profit; merging in the margin sometimes changes the ranking</li>
    <li>Each step is a line or two thanks to Pandas — compare with the manual level-one project</li>
</ul>

<h3>Exercise</h3>

<p>Extend the report: (1) add "best category per city" via <code>groupby(["city", "category"])</code> then <code>idxmax</code> on the level, (2) compute the share of orders with <code>quantity == 1</code> per city, (3) export the summary table to <code>report.csv</code> with <code>to_csv</code>.</p>
`
        },
        code: { ar: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="cm"># 1) تحميل + فحص</span>
df = pd.<span class="fn">read_csv</span>(<span class="st">"sales.csv"</span>, parse_dates=[<span class="st">"order_date"</span>])
df = df[df[<span class="st">"quantity"</span>] &gt; 0].<span class="fn">copy</span>()          <span class="cm"># استبعاد صفوف تالفة بوعي</span>

<span class="cm"># 2) أعمدة مشتقّة</span>
df[<span class="st">"revenue"</span>] = df[<span class="st">"quantity"</span>] * df[<span class="st">"unit_price"</span>]
df[<span class="st">"month"</span>] = df[<span class="st">"order_date"</span>].dt.<span class="fn">to_period</span>(<span class="st">"M"</span>)

<span class="cm"># 3) اتجاه شهري</span>
monthly = df.<span class="fn">groupby</span>(<span class="st">"month"</span>)[<span class="st">"revenue"</span>].<span class="fn">sum</span>()
<span class="fn">print</span>(monthly.<span class="fn">pct_change</span>().<span class="fn">round</span>(3))          <span class="cm"># نسبة التغيّر شهرياً</span>

<span class="cm"># 4) أعلى 5 مدن</span>
top_cities = (
    df.<span class="fn">groupby</span>(<span class="st">"city"</span>, as_index=<span class="kw">False</span>)[<span class="st">"revenue"</span>].<span class="fn">sum</span>()
      .<span class="fn">nlargest</span>(5, <span class="st">"revenue"</span>)
)

<span class="cm"># 5) دمج مع هوامش الفئات ← الربح</span>
categories = pd.<span class="fn">DataFrame</span>({
    <span class="st">"category"</span>:   [<span class="st">"food"</span>, <span class="st">"electronics"</span>, <span class="st">"clothing"</span>],
    <span class="st">"margin_pct"</span>: [0.15, 0.30, 0.45],
})
df = df.<span class="fn">merge</span>(categories, on=<span class="st">"category"</span>, how=<span class="st">"left"</span>, validate=<span class="st">"many_to_one"</span>)
df[<span class="st">"profit"</span>] = df[<span class="st">"revenue"</span>] * df[<span class="st">"margin_pct"</span>]

by_profit = df.<span class="fn">groupby</span>(<span class="st">"category"</span>)[<span class="st">"profit"</span>].<span class="fn">sum</span>().<span class="fn">sort_values</span>(ascending=<span class="kw">False</span>)
<span class="fn">print</span>(by_profit)          <span class="cm"># قد يختلف ترتيبها عن ترتيب الإيراد</span>

<span class="cm"># 6) متوسط قيمة الطلب لكل مدينة</span>
report = df.<span class="fn">groupby</span>(<span class="st">"city"</span>).<span class="fn">agg</span>(
    orders=(<span class="st">"order_id"</span>, <span class="st">"count"</span>),
    revenue=(<span class="st">"revenue"</span>, <span class="st">"sum"</span>),
    aov=(<span class="st">"revenue"</span>, <span class="st">"mean"</span>),
).<span class="fn">round</span>(2)
<span class="fn">print</span>(report)`, en: `<span class="kw">import</span> pandas <span class="kw">as</span> pd

<span class="cm"># 1) Load + inspect</span>
df = pd.<span class="fn">read_csv</span>(<span class="st">"sales.csv"</span>, parse_dates=[<span class="st">"order_date"</span>])
df = df[df[<span class="st">"quantity"</span>] &gt; 0].<span class="fn">copy</span>()          <span class="cm"># knowingly excluding corrupted rows</span>

<span class="cm"># 2) Derived columns</span>
df[<span class="st">"revenue"</span>] = df[<span class="st">"quantity"</span>] * df[<span class="st">"unit_price"</span>]
df[<span class="st">"month"</span>] = df[<span class="st">"order_date"</span>].dt.<span class="fn">to_period</span>(<span class="st">"M"</span>)

<span class="cm"># 3) Monthly trend</span>
monthly = df.<span class="fn">groupby</span>(<span class="st">"month"</span>)[<span class="st">"revenue"</span>].<span class="fn">sum</span>()
<span class="fn">print</span>(monthly.<span class="fn">pct_change</span>().<span class="fn">round</span>(3))          <span class="cm"># month-over-month percent change</span>

<span class="cm"># 4) Top 5 cities</span>
top_cities = (
    df.<span class="fn">groupby</span>(<span class="st">"city"</span>, as_index=<span class="kw">False</span>)[<span class="st">"revenue"</span>].<span class="fn">sum</span>()
      .<span class="fn">nlargest</span>(5, <span class="st">"revenue"</span>)
)

<span class="cm"># 5) Merge with category margins ← profit</span>
categories = pd.<span class="fn">DataFrame</span>({
    <span class="st">"category"</span>:   [<span class="st">"food"</span>, <span class="st">"electronics"</span>, <span class="st">"clothing"</span>],
    <span class="st">"margin_pct"</span>: [0.15, 0.30, 0.45],
})
df = df.<span class="fn">merge</span>(categories, on=<span class="st">"category"</span>, how=<span class="st">"left"</span>, validate=<span class="st">"many_to_one"</span>)
df[<span class="st">"profit"</span>] = df[<span class="st">"revenue"</span>] * df[<span class="st">"margin_pct"</span>]

by_profit = df.<span class="fn">groupby</span>(<span class="st">"category"</span>)[<span class="st">"profit"</span>].<span class="fn">sum</span>().<span class="fn">sort_values</span>(ascending=<span class="kw">False</span>)
<span class="fn">print</span>(by_profit)          <span class="cm"># its order may differ from the revenue order</span>

<span class="cm"># 6) Average order value per city</span>
report = df.<span class="fn">groupby</span>(<span class="st">"city"</span>).<span class="fn">agg</span>(
    orders=(<span class="st">"order_id"</span>, <span class="st">"count"</span>),
    revenue=(<span class="st">"revenue"</span>, <span class="st">"sum"</span>),
    aov=(<span class="st">"revenue"</span>, <span class="st">"mean"</span>),
).<span class="fn">round</span>(2)
<span class="fn">print</span>(report)` },
        quiz: {
            q: {
                ar: "في المشروع، رتّبت المدن حسب <code>revenue</code> ثم حسب <code>profit</code> (بعد الدمج مع الهوامش) فاختلف الترتيب. ما التفسير؟",
                en: "In the project, you ranked cities by <code>revenue</code> then by <code>profit</code> (after merging the margins) and the ranking changed. Why?"
            },
            options: {
                ar: [
                    "خطأ في الدمج",
                    "الفئات تختلف في الهامش، فمدينة تبيع كثيراً من فئة منخفضة الهامش قد يكون إيرادها عالياً وربحها أقلّ من مدينة تبيع فئات عالية الهامش",
                    "<code>profit</code> و<code>revenue</code> يجب أن يعطيا نفس الترتيب دائماً",
                    "<code>sort_values</code> غير حتمي"
                ],
                en: [
                    "A merge bug",
                    "Categories differ in margin, so a city selling a lot of a low-margin category can have high revenue but lower profit than a city selling high-margin categories",
                    "<code>profit</code> and <code>revenue</code> must always give the same ranking",
                    "<code>sort_values</code> is non-deterministic"
                ]
            },
            correct: 1,
            explanation: {
                ar: "الإيراد مجموع المبيعات؛ الربح = الإيراد × الهامش، والهامش يختلف بين الفئات. مدينة إيرادها عالٍ من بيع الطعام (هامش 15%) قد تربح أقلّ من مدينة أصغر إيراداً تبيع إلكترونيات (30%). لهذا يدمج المحلّل دائماً بيانات التكلفة/الهامش قبل ترتيب «الأفضل».",
                en: "Revenue is total sales; profit = revenue &times; margin, and the margin differs by category. A city with high revenue from food (15% margin) can earn less than a smaller-revenue city selling electronics (30%). That is why an analyst always merges cost/margin data before ranking the \"best\"."
            }
        }
    }

];
