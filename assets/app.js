const articles = [
  {
    id: 1180,
    title: "Socialization in the Preservation of Urban Traditional Culture: International Experiences and Recommendations for Vietnam (Case Studies of Hoi An and Hue)",
    authors: "Vo Huu Hoa",
    doi: "10.47393/jshe.vol15.i2.1180",
    pages: "1–11",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1180",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1180/897"
  },
  {
    id: 1210,
    title: "Developing Measures to Improve Mental Health Help-Seeking Behaviors Among Secondary School Students",
    authors: "Nguyen Le Bao Hoang, Huynh Van Son, Bui Hong Quan",
    doi: "10.47393/jshe.vol15.i2.3797",
    pages: "12–20",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1210",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1210/898"
  },
  {
    id: 1195,
    title: "From ‘Underlying Narrative Strand’ to ‘Reflection’: The Narrative Artistry in The Scholars by Wu Jingzi",
    authors: "Le Sy Dien",
    doi: "10.47393/jshe.vol15.i2.3664",
    pages: "21–27",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1195",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1195/902"
  },
  {
    id: 1194,
    title: "Common Dimensions of Gender Prejudice in Gender-Biased Utterances (Through Vietnamese Literary Corpora)",
    authors: "Tran Thi Mai Huong",
    doi: "10.47393/jshe.vol15.i2.3661",
    pages: "28–34",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1194",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1194/903"
  },
  {
    id: 1203,
    title: "Compliments in Asynchronous Online Feedback: Implications in L2 Writing Classrooms",
    authors: "Thu M. Lau",
    doi: "10.47393/jshe.vol15.i2.3680",
    pages: "35–40",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1203",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1203/905"
  },
  {
    id: 1192,
    title: "The Relationship Between Stress, Anxiety, Depression and Fear of COVID-19 Among Students at Dalat College",
    authors: "Nguyen Thanh Truc, Nguyen Thi Nhu Thuy",
    doi: "10.47393/jshe.vol15.i2.3660",
    pages: "41–47",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1192",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1192/906"
  },
  {
    id: 1039,
    title: "Modality Markers in Vietnamese Sentence Fragments",
    authors: "Trinh Quynh Dong Nghi",
    doi: "",
    pages: "48–59",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1039",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1039/907"
  },
  {
    id: 1166,
    title: "A Survey of English–Vietnamese Translation Errors by Google Translate in Terms of Connotational Meaning of Collocation in The Greatness Guide",
    authors: "Le Tan Thi, Pham Thi Tuyet Ngan",
    doi: "",
    pages: "60–64",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1166",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1166/908"
  },
  {
    id: 1205,
    title: "Bottom-Up Development: Living Heritage and Identity Strategies Among Ethnic Minority Youth",
    authors: "Phan Thuy Giang",
    doi: "10.47393/jshe.vol15.i2.3751",
    pages: "65–77",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1205",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1205/909"
  },
  {
    id: 1202,
    title: "Buddhist Economy Under Rama V: State Patronage Policy and Its Impact on the Sangha",
    authors: "Pham Quoc Trung, Syngernmanh Khamphamay",
    doi: "",
    pages: "78–87",
    articleUrl: "https://jshe.vn/index.php/jshe/article/view/1202",
    pdfUrl: "https://jshe.vn/index.php/jshe/article/view/1202/910"
  }
];

const translations = {
  vi: {
    skip: "Bỏ qua để đến nội dung chính",
    publisherShort: "Đại học Đà Nẵng · Trường Đại học Sư phạm",
    search: "Tìm kiếm",
    submit: "Gửi bản thảo",
    menu: "Trình đơn",
    home: "Trang chủ",
    currentIssue: "Số hiện hành",
    archives: "Lưu trữ",
    announcements: "Thông báo",
    about: "Giới thiệu",
    policies: "Chính sách",
    eyebrow: "Truy cập mở · Phản biện khoa học · Liên ngành",
    heroTitle: "Nghiên cứu giúp chúng ta hiểu sâu hơn về con người, văn hóa và giáo dục.",
    heroLead: "Công bố các nghiên cứu nguyên bản về văn học, ngôn ngữ học, lịch sử, triết học, khoa học chính trị, văn hóa, tâm lý học, xã hội học và giáo dục.",
    exploreIssue: "Khám phá số hiện hành",
    journalScope: "Phạm vi tạp chí",
    latestIssue: "Số mới nhất",
    publishedDate: "Xuất bản ngày 25 tháng 12 năm 2025",
    viewToc: "Xem mục lục",
    publicationModel: "Mô hình xuất bản",
    openAccess: "Truy cập mở",
    reviewModel: "Mô hình phản biện",
    doubleBlind: "Kín hai chiều",
    frequency: "Tần suất",
    biannual: "Hai số / năm",
    tableOfContents: "Mục lục",
    currentHeading: "Số hiện hành",
    filterArticles: "Lọc bài viết",
    filterPlaceholder: "Lọc theo tiêu đề, tác giả hoặc DOI",
    noArticles: "Không có bài viết phù hợp với tìm kiếm.",
    forAuthors: "Dành cho tác giả",
    shareResearch: "Chia sẻ nghiên cứu của bạn",
    authorPrompt: "Tạp chí tiếp nhận bản thảo nguyên bản bằng tiếng Anh hoặc tiếng Việt quanh năm.",
    beginSubmission: "Bắt đầu gửi bài",
    authorGuidelines: "Hướng dẫn tác giả",
    journalDetails: "Thông tin tạp chí",
    language: "Ngôn ngữ",
    founded: "Thành lập",
    publisher: "Đơn vị xuất bản",
    stayInformed: "Theo dõi tạp chí",
    subscribeCopy: "Nhận thư mời viết bài và thông báo số mới.",
    fromEditors: "Từ Ban biên tập",
    viewAll: "Xem tất cả",
    callForPapers: "Mời gửi bài",
    callTitle: "Thư mời gửi bài cho Tạp chí Khoa học Xã hội, Nhân văn và Giáo dục",
    callCopy: "Trân trọng mời gửi bài cho Số 1 (tháng 6/2026) và Số 2 (tháng 12/2026) trong các lĩnh vực của tạp chí.",
    newIssue: "Số mới",
    issuePublished: "Tập 15, Số 2 đã được xuất bản",
    issuePublishedCopy: "Mười bài báo đã phản biện về di sản, ngôn ngữ, tâm lý, giáo dục và nghiên cứu văn hóa.",
    journalNews: "Tin tạp chí",
    scoreTitle: "Hội đồng Giáo sư Nhà nước nâng mức điểm đánh giá bài báo",
    scoreCopy: "Công nhận trong các ngành văn học, ngôn ngữ học, xã hội học, giáo dục, khoa học chính trị và triết học.",
    scholarlyRecord: "Hồ sơ học thuật",
    completeArchive: "Toàn bộ lưu trữ",
    aboutJournal: "Về tạp chí",
    publicForum: "Một diễn đàn nghiêm túc, cởi mở cho nghiên cứu liên ngành.",
    aboutP1: "Thành lập năm 2011, Tạp chí Khoa học Xã hội, Nhân văn và Giáo dục là tạp chí nghiên cứu truy cập mở, có phản biện, do Trường Đại học Sư phạm – Đại học Đà Nẵng xuất bản.",
    aboutP2: "Tạp chí công bố bài nghiên cứu nguyên bản, tư liệu, tổng quan và các hình thức học thuật khác bằng tiếng Anh và tiếng Việt. Phạm vi gồm văn học và ngôn ngữ học, lịch sử và khảo cổ, triết học và khoa học chính trị, văn hóa và tôn giáo, tâm lý học, xã hội học và giáo dục.",
    aboutP3: "Tạp chí thuộc danh mục tạp chí khoa học có phản biện được Hội đồng Giáo sư Nhà nước công nhận cho các ngành phù hợp.",
    readProfile: "Đọc hồ sơ tạp chí đầy đủ",
    editorialStandards: "Chuẩn mực biên tập",
    pathPublication: "Quy trình minh bạch từ gửi bài đến xuất bản",
    submission: "Gửi bài",
    submissionCopy: "Tòa soạn kiểm tra phạm vi, tính nguyên bản và các yêu cầu cơ bản.",
    screening: "Sơ duyệt biên tập",
    screeningCopy: "Biên tập viên đánh giá sự phù hợp học thuật, liêm chính và mức độ sẵn sàng phản biện.",
    review: "Phản biện kín hai chiều",
    reviewCopy: "Chuyên gia độc lập đánh giá bản thảo mà không biết danh tính tác giả và ngược lại.",
    decision: "Quyết định và sửa bài",
    decisionCopy: "Tác giả xử lý góp ý; biên tập viên đưa ra và lưu hồ sơ quyết định cuối cùng.",
    production: "Sản xuất",
    productionCopy: "Bài được chấp nhận sẽ được biên tập, dàn trang, gán metadata và xuất bản trực tuyến.",
    editorialPolicies: "Chính sách biên tập",
    privacy: "Tuyên bố quyền riêng tư",
    openKnowledge: "Học thuật độc lập. Tri thức mở.",
    navigate: "Điều hướng",
    contact: "Liên hệ",
    publishing: "Xuất bản",
    rights: "Bảo lưu mọi quyền.",
    designNote: "Giao diện xuất bản học thuật tối giản, lấy cảm hứng từ nguyên tắc truy cập mở.",
    backTop: "Về đầu trang ↑",
    journalSearch: "Tìm kiếm tạp chí",
    searchArticles: "Tìm bài viết",
    copyDoi: "Sao chép DOI"
  }
};

const articleList = document.querySelector("#article-list");
const articleTemplate = document.querySelector("#article-template");
const emptyState = document.querySelector("#empty-state");
const articleFilter = document.querySelector("#article-filter");
const searchDialog = document.querySelector("#search-dialog");
const globalSearch = document.querySelector("#global-search");
const searchResults = document.querySelector("#search-results");
let activeLanguage = "en";

function normalized(value) {
  return value.toLocaleLowerCase("en").normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

function matchingArticles(query) {
  const needle = normalized(query.trim());
  if (!needle) return articles;
  return articles.filter((article) => normalized(`${article.title} ${article.authors} ${article.doi}`).includes(needle));
}

function renderArticles(query = "") {
  const matches = matchingArticles(query);
  articleList.replaceChildren();
  emptyState.hidden = matches.length > 0;

  matches.forEach((article) => {
    const fragment = articleTemplate.content.cloneNode(true);
    fragment.querySelector(".article-count").textContent = String(articles.indexOf(article) + 1).padStart(2, "0");
    fragment.querySelector(".article-section").textContent = activeLanguage === "vi" ? "Bài nghiên cứu" : "Research article";
    const title = fragment.querySelector(".article-title");
    title.textContent = article.title;
    title.href = article.articleUrl;
    fragment.querySelector(".article-authors").textContent = article.authors;
    const doi = fragment.querySelector(".article-doi");
    const citeButton = fragment.querySelector(".cite-button");
    citeButton.textContent = activeLanguage === "vi" ? "Sao chép DOI" : "Copy DOI";
    if (article.doi) {
      doi.textContent = article.doi;
      doi.href = `https://doi.org/${article.doi}`;
      citeButton.dataset.doi = article.doi;
    } else {
      doi.remove();
      citeButton.remove();
    }
    fragment.querySelector(".article-pages").textContent = `${activeLanguage === "vi" ? "Trang" : "Pages"} ${article.pages}`;
    fragment.querySelector(".pdf-link").href = article.pdfUrl;
    articleList.append(fragment);
  });
}

function renderSearch(query = "") {
  const trimmed = query.trim();
  searchResults.replaceChildren();
  if (!trimmed) {
    const hint = document.createElement("p");
    hint.className = "search-hint";
    hint.textContent = activeLanguage === "vi" ? "Nhập tiêu đề, tên tác giả hoặc DOI để bắt đầu." : "Enter a title, author name or DOI to begin.";
    searchResults.append(hint);
    return;
  }
  const matches = matchingArticles(trimmed);
  if (!matches.length) {
    const hint = document.createElement("p");
    hint.className = "search-hint";
    hint.textContent = activeLanguage === "vi" ? "Không tìm thấy bài viết phù hợp." : "No matching articles found.";
    searchResults.append(hint);
    return;
  }
  matches.forEach((article) => {
    const link = document.createElement("a");
    link.className = "search-result";
    link.href = article.articleUrl;
    link.target = "_blank";
    link.rel = "noopener";
    const title = document.createElement("strong");
    title.textContent = article.title;
    const meta = document.createElement("span");
    meta.textContent = `${article.authors}${article.doi ? ` · ${article.doi}` : ""}`;
    link.append(title, meta);
    searchResults.append(link);
  });
}

function setLanguage(language) {
  activeLanguage = language;
  document.documentElement.lang = language;
  const dictionary = translations[language] || {};
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!element.dataset.enText) element.dataset.enText = element.textContent.trim();
    element.textContent = language === "vi" && dictionary[element.dataset.i18n] ? dictionary[element.dataset.i18n] : element.dataset.enText;
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    if (!element.dataset.enPlaceholder) element.dataset.enPlaceholder = element.placeholder;
    const key = element.dataset.i18nPlaceholder;
    element.placeholder = language === "vi" && dictionary[key] ? dictionary[key] : element.dataset.enPlaceholder;
  });
  const toggle = document.querySelector("#language-toggle");
  toggle.textContent = language === "vi" ? "EN" : "VI";
  toggle.setAttribute("aria-label", language === "vi" ? "Switch to English" : "Chuyển sang tiếng Việt");
  localStorage.setItem("jsshe-language", language);
  renderArticles(articleFilter.value);
  renderSearch(globalSearch.value);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  const toggle = document.querySelector("#theme-toggle");
  toggle.setAttribute("aria-label", theme === "dark" ? "Use light theme" : "Use dark theme");
  toggle.innerHTML = theme === "dark"
    ? '<svg aria-hidden="true" viewBox="0 0 24 24"><circle cx="12" cy="12" r="4"/><path d="M12 2v2M12 20v2M4.9 4.9l1.4 1.4M17.7 17.7l1.4 1.4M2 12h2M20 12h2M4.9 19.1l1.4-1.4M17.7 6.3l1.4-1.4"/></svg>'
    : '<svg aria-hidden="true" viewBox="0 0 24 24"><path d="M20.5 14.2A8.5 8.5 0 0 1 9.8 3.5 8.5 8.5 0 1 0 20.5 14.2Z"/></svg>';
  localStorage.setItem("jsshe-theme", theme);
}

function openSearch() {
  if (!searchDialog.open) searchDialog.showModal();
  document.body.classList.add("dialog-open");
  renderSearch(globalSearch.value);
  window.setTimeout(() => globalSearch.focus(), 0);
}

function closeSearch() {
  searchDialog.close();
  document.body.classList.remove("dialog-open");
}

articleFilter.addEventListener("input", (event) => renderArticles(event.target.value));
globalSearch.addEventListener("input", (event) => renderSearch(event.target.value));
document.querySelector("#search-trigger").addEventListener("click", openSearch);
document.querySelector("#search-close").addEventListener("click", closeSearch);
searchDialog.addEventListener("click", (event) => {
  if (event.target === searchDialog) closeSearch();
});
searchDialog.addEventListener("close", () => document.body.classList.remove("dialog-open"));

document.addEventListener("keydown", (event) => {
  const isTyping = /input|textarea|select/i.test(document.activeElement.tagName);
  if (event.key === "/" && !isTyping) {
    event.preventDefault();
    openSearch();
  }
  if (event.key === "Escape" && document.body.classList.contains("nav-open")) {
    document.body.classList.remove("nav-open");
    document.querySelector("#menu-toggle").setAttribute("aria-expanded", "false");
  }
});

document.querySelector("#language-toggle").addEventListener("click", () => setLanguage(activeLanguage === "en" ? "vi" : "en"));
document.querySelector("#theme-toggle").addEventListener("click", () => setTheme(document.documentElement.dataset.theme === "dark" ? "light" : "dark"));

const menuToggle = document.querySelector("#menu-toggle");
menuToggle.addEventListener("click", () => {
  const isOpen = document.body.classList.toggle("nav-open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
});
document.querySelectorAll("#primary-nav a").forEach((link) => link.addEventListener("click", () => {
  document.body.classList.remove("nav-open");
  menuToggle.setAttribute("aria-expanded", "false");
}));

articleList.addEventListener("click", async (event) => {
  const button = event.target.closest(".cite-button");
  if (!button || !button.dataset.doi) return;
  const original = activeLanguage === "vi" ? "Sao chép DOI" : "Copy DOI";
  try {
    await navigator.clipboard.writeText(button.dataset.doi);
    button.textContent = activeLanguage === "vi" ? "Đã sao chép" : "Copied";
  } catch {
    button.textContent = button.dataset.doi;
  }
  window.setTimeout(() => { button.textContent = original; }, 1800);
});

document.querySelector("#subscribe-form").addEventListener("submit", (event) => {
  event.preventDefault();
  const status = document.querySelector("#subscribe-status");
  status.textContent = activeLanguage === "vi"
    ? "Biểu mẫu minh họa — vui lòng đăng ký trên cổng tạp chí chính thức."
    : "Demo form — please register on the official journal portal.";
});

const sections = [...document.querySelectorAll("main section[id]")];
const navigationLinks = [...document.querySelectorAll("#primary-nav a[href^='#']")];
const observer = new IntersectionObserver((entries) => {
  const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
  if (!visible) return;
  navigationLinks.forEach((link) => link.classList.toggle("active", link.getAttribute("href") === `#${visible.target.id}`));
}, { rootMargin: "-30% 0px -60%", threshold: [0.05, 0.25, 0.5] });
sections.forEach((section) => observer.observe(section));

document.querySelector("#current-year").textContent = new Date().getFullYear();
const preferredTheme = localStorage.getItem("jsshe-theme") || (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
setTheme(preferredTheme);
setLanguage(localStorage.getItem("jsshe-language") === "vi" ? "vi" : "en");
