// Configuration
const GOOGLE_CLIENT_ID = "1084240465754-qnod5oaq7gpfg40l5lmi0lgnb2fihldu.apps.googleusercontent.com";

// Language Translations
const translations = {
  id: {
    title: "Log In",
    subtitle: "Masuk ke akun Anda",
    email: "Email",
    emailPlaceholder: "Masukkan email",
    password: "Password",
    passwordPlaceholder: "Masukkan password",
    submitBtn: "Masuk",
    googleBtn: "Lanjutkan dengan Google",
    txtSwitch: "Belum punya akun?",
    linkSwitch: "Daftar sekarang",
    errNoUser: "Belum ada akun terdaftar! Silakan daftar dahulu.",
    errWrong: "Email atau password salah!",
    flagUrl: "https://flagcdn.com/w40/id.png"
  },
  en: {
    title: "Log In",
    subtitle: "Log in to your account",
    email: "Email",
    emailPlaceholder: "Enter email",
    password: "Password",
    passwordPlaceholder: "Enter password",
    submitBtn: "Sign In",
    googleBtn: "Continue with Google",
    txtSwitch: "Don't have an account?",
    linkSwitch: "Register now",
    errNoUser: "No account found! Please register first.",
    errWrong: "Invalid email or password!",
    flagUrl: "https://flagcdn.com/w40/gb.png"
  },
  ja: {
    title: "ログイン",
    subtitle: "アカウントにログインしてください",
    email: "メールアドレス",
    emailPlaceholder: "メールアドレスを入力",
    password: "パスワード",
    passwordPlaceholder: "パスワードを入力",
    submitBtn: "ログイン",
    googleBtn: "Googleで続行",
    txtSwitch: "アカウントをお持ちでないですか？",
    linkSwitch: "新規登録",
    errNoUser: "登録されているアカウントがありません。",
    errWrong: "メールアドレスまたはパスワードが正しくありません。",
    flagUrl: "https://flagcdn.com/w40/jp.png"
  },
  ko: {
    title: "로그인",
    subtitle: "계정에 로그인하세요",
    email: "이메일",
    emailPlaceholder: "이메일을 입력하세요",
    password: "비밀번호",
    passwordPlaceholder: "비밀번호를 입력하세요",
    submitBtn: "로그인",
    googleBtn: "Google로 계속하기",
    txtSwitch: "계정이 없으신가요?",
    linkSwitch: "회원가입",
    errNoUser: "등록된 계정이 없습니다.",
    errWrong: "이메일 또는 비밀번호가 올바르지 않습니다.",
    flagUrl: "https://flagcdn.com/w40/kr.png"
  },
  zh: {
    title: "登录",
    subtitle: "登录您的账户",
    email: "电子邮箱",
    emailPlaceholder: "请输入电子邮箱",
    password: "密码",
    passwordPlaceholder: "请输入密码",
    submitBtn: "登录",
    googleBtn: "使用 Google 继续",
    txtSwitch: "还没有账户？",
    linkSwitch: "立即注册",
    errNoUser: "未找到注册账户！请先注册。",
    errWrong: "电子邮件或密码错误！",
    flagUrl: "https://flagcdn.com/w40/cn.png"
  }
};

let currentLang = 'id';

// Initialize Google OAuth with Retry Logic
function initGoogleAuth() {
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      auto_select: false,
      cancel_on_tap_outside: true
    });
    console.log("Google SDK berhasil diinisialisasi.");
  } else {
    setTimeout(initGoogleAuth, 500);
  }
}

// Handle Google Auth Response
function handleCredentialResponse(response) {
  console.log("Token Google ID:", response.credential);
  alert("Login dengan Google berhasil!");
  // Arahkan ke halaman utama/dashboard jika diperlukan
  // window.location.href = "index.html";
}

// Function called when clicking Google Button
function loginWithGoogle() {
  if (typeof google !== 'undefined' && google.accounts && google.accounts.id) {
    google.accounts.id.prompt();
  } else {
    alert("Google Service belum siap. Mohon tunggu beberapa detik lagi.");
  }
}

// Toggle Language Dropdown
function toggleLangDropdown() {
  const dropdown = document.getElementById("langDropdown");
  if (dropdown) {
    dropdown.style.display = dropdown.style.display === "block" ? "none" : "block";
  }
}

// Select Language
function selectLang(lang) {
  currentLang = lang;
  const t = translations[lang];

  document.getElementById("txtTitle").textContent = t.title;
  document.getElementById("txtSubtitle").textContent = t.subtitle;
  document.getElementById("lblEmail").textContent = t.email;
  document.getElementById("inputEmail").placeholder = t.emailPlaceholder;
  document.getElementById("lblPassword").textContent = t.password;
  document.getElementById("inputPassword").placeholder = t.passwordPlaceholder;
  document.getElementById("btnSubmit").textContent = t.submitBtn;
  document.getElementById("txtGoogleBtn").textContent = t.googleBtn;
  document.getElementById("txtSwitch").textContent = t.txtSwitch;
  document.getElementById("linkSwitch").textContent = t.linkSwitch;
  document.getElementById("currentFlag").src = t.flagUrl;

  const dropdown = document.getElementById("langDropdown");
  if (dropdown) dropdown.style.display = "none";
}

// DOM Event Listeners
document.addEventListener("DOMContentLoaded", () => {
  // Initialize Google Auth
  initGoogleAuth();

  // Close dropdown on outside click
  window.addEventListener("click", (e) => {
    if (!e.target.closest(".lang-selector")) {
      const dropdown = document.getElementById("langDropdown");
      if (dropdown) dropdown.style.display = "none";
    }
  });

  // Handle Form Submission
  const loginForm = document.getElementById("loginForm");
  if (loginForm) {
    loginForm.addEventListener("submit", (e) => {
      e.preventDefault();
      const email = document.getElementById("inputEmail").value.trim();
      const password = document.getElementById("inputPassword").value;
      const errorMessage = document.getElementById("errorMessage");

      const users = JSON.parse(localStorage.getItem("users") || "[]");
      const foundUser = users.find(u => u.email === email);

      if (!foundUser) {
        showError(translations[currentLang].errNoUser);
        return;
      }

      if (foundUser.password !== password) {
        showError(translations[currentLang].errWrong);
        return;
      }

      alert("Login berhasil!");
      // window.location.href = "index.html";
    });
  }
});

function showError(msg) {
  const errorMessage = document.getElementById("errorMessage");
  if (errorMessage) {
    errorMessage.textContent = msg;
    errorMessage.style.display = "block";
  }
}
