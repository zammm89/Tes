// GANTI DENGAN CLIENT ID ASLI DARI GOOGLE CLOUD CONSOLE
const GOOGLE_CLIENT_ID = "1084240465754-qnod5oaq7gpfg40i5lmi0ignb2fihidu.apps.googleusercontent.com";


const translations = {
  id: {
    title: "Daftar Akun",
    subtitle: "Buat akun baru Anda",
    name: "Nama Lengkap",
    namePlaceholder: "Masukkan nama",
    email: "Email",
    emailPlaceholder: "Masukkan email",
    password: "Password",
    passwordPlaceholder: "Buat password",
    submitBtn: "Daftar",
    googleBtn: "Daftar dengan Google",
    txtSwitch: "Sudah punya akun?",
    linkSwitch: "Masuk sekarang",
    errExist: "Email sudah terdaftar!",
    flagUrl: "https://flagcdn.com/w40/id.png"
  },
  en: {
    title: "Register",
    subtitle: "Create your new account",
    name: "Full Name",
    namePlaceholder: "Enter your full name",
    email: "Email",
    emailPlaceholder: "Enter your email",
    password: "Password",
    passwordPlaceholder: "Create a password",
    submitBtn: "Register",
    googleBtn: "Sign up with Google",
    txtSwitch: "Already have an account?",
    linkSwitch: "Log in now",
    errExist: "Email is already registered!",
    flagUrl: "https://flagcdn.com/w40/gb.png"
  },
  ja: {
    title: "新規登録",
    subtitle: "新しいアカウントを作成してください",
    name: "氏名",
    namePlaceholder: "名前を入力",
    email: "メールアドレス",
    emailPlaceholder: "メールアドレスを入力",
    password: "パスワード",
    passwordPlaceholder: "パスワードを作成",
    submitBtn: "登録",
    googleBtn: "Googleで登録",
    txtSwitch: "すでにアカウントをお持ちですか？",
    linkSwitch: "ログイン",
    errExist: "このメールアドレスは既に登録されています。",
    flagUrl: "https://flagcdn.com/w40/jp.png"
  },
  ko: {
    title: "회원가입",
    subtitle: "새 계정을 만드세요",
    name: "이름",
    namePlaceholder: "이름을 입력하세요",
    email: "이메일",
    emailPlaceholder: "이메일을 입력하세요",
    password: "비밀번호",
    passwordPlaceholder: "비밀번호를 생성하세요",
    submitBtn: "가입하기",
    googleBtn: "Google로 가입하기",
    txtSwitch: "이미 계정이 있으신가요?",
    linkSwitch: "로그인하기",
    errExist: "이미 등록된 이메일입니다!",
    flagUrl: "https://flagcdn.com/w40/kr.png"
  },
  zh: {
    title: "注册账户",
    subtitle: "创建您的新账户",
    name: "全名",
    namePlaceholder: "请输入全名",
    email: "电子邮件",
    emailPlaceholder: "请输入电子邮件",
    password: "密码",
    passwordPlaceholder: "创建密码",
    submitBtn: "注册",
    googleBtn: "使用 Google 注册",
    txtSwitch: "已有账户？",
    linkSwitch: "立即登录",
    errExist: "该电子邮件已被注册！",
    flagUrl: "https://flagcdn.com/w40/cn.png"
  },
  de: {
    title: "Registrieren",
    subtitle: "Erstellen Sie Ihr neues Konto",
    name: "Vollständiger Name",
    namePlaceholder: "Name eingeben",
    email: "E-Mail",
    emailPlaceholder: "E-Mail eingeben",
    password: "Passwort",
    passwordPlaceholder: "Passwort erstellen",
    submitBtn: "Registrieren",
    googleBtn: "Mit Google registrieren",
    txtSwitch: "Bereits ein Konto?",
    linkSwitch: "Jetzt anmelden",
    errExist: "E-Mail ist bereits registriert!",
    flagUrl: "https://flagcdn.com/w40/de.png"
  },
  fr: {
    title: "S'inscrire",
    subtitle: "Créer votre nouveau compte",
    name: "Nom complet",
    namePlaceholder: "Entrez votre nom",
    email: "E-mail",
    emailPlaceholder: "Entrez votre e-mail",
    password: "Mot de passe",
    passwordPlaceholder: "Créer un mot de passe",
    submitBtn: "S'inscrire",
    googleBtn: "S'inscrire avec Google",
    txtSwitch: "Vous avez déjà un compte ?",
    linkSwitch: "Se connecter",
    errExist: "Cet e-mail est déjà enregistré !",
    flagUrl: "https://flagcdn.com/w40/fr.png"
  }
};

function safeText(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.textContent = value;
}

function safePlaceholder(id, value) {
  const el = document.getElementById(id);
  if (el && value !== undefined) el.placeholder = value;
}

function applyLanguage(lang) {
  const t = translations[lang] || translations.id;

  safeText('title', t.title);
  safeText('subtitle', t.subtitle);
  safeText('lbl-name', t.name);
  safePlaceholder('username', t.namePlaceholder);
  safeText('lbl-email', t.email);
  safePlaceholder('email', t.emailPlaceholder);
  safeText('lbl-password', t.password);
  safePlaceholder('password', t.passwordPlaceholder);
  safeText('btn-submit', t.submitBtn);
  safeText('txt-google', t.googleBtn);
  safeText('txt-switch', t.txtSwitch);
  safeText('link-switch', t.linkSwitch);

  const langFlag = document.getElementById('lang-flag');
  if (langFlag) {
    langFlag.src = t.flagUrl;
  }

  localStorage.setItem('selectedLang', lang);
}

document.addEventListener('DOMContentLoaded', function () {
  const langSelect = document.getElementById('lang-select');
  const currentLang = localStorage.getItem('selectedLang') || 'id';

  if (langSelect) {
    langSelect.value = currentLang;
    applyLanguage(currentLang);

    langSelect.addEventListener('change', function () {
      applyLanguage(this.value);
    });
  }

  // Toggle Password
  const togglePassword = document.getElementById('toggle-password');
  const passwordInput = document.getElementById('password');
  const eyeIcon = document.getElementById('eye-icon');

  const eyeOpenSVG = `<path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/>`;
  const eyeOffSVG = `<path d="M9.88 9.88a3 3 0 1 0 4.24 4.24"/><path d="M10.73 5.08A10.43 10.43 0 0 1 12 5c7 0 10 7 10 7a13.16 13.16 0 0 1-1.67 2.68"/><path d="M6.61 6.61A13.52 13.52 0 0 0 2 12s3 7 10 7a9.74 9.74 0 0 0 5.39-1.61"/><line x1="2" x2="22" y1="2" y2="22"/>`;

  if (togglePassword && passwordInput && eyeIcon) {
    togglePassword.addEventListener('click', function () {
      const isPassword = passwordInput.getAttribute('type') === 'password';
      passwordInput.setAttribute('type', isPassword ? 'text' : 'password');
      eyeIcon.innerHTML = isPassword ? eyeOffSVG : eyeOpenSVG;
    });
  }

  // Form Manual Register
  const registerForm = document.getElementById('register-form');
  if (registerForm) {
    registerForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const username = document.getElementById('username').value;
      const emailInput = document.getElementById('email');
      const email = emailInput.value;
      const password = document.getElementById('password').value;
      const errorMessage = document.getElementById('error-message');
      const activeLang = localStorage.getItem('selectedLang') || 'id';
      const t = translations[activeLang];

      if (errorMessage) {
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
      }
      if (emailInput) emailInput.classList.remove('error');

      let usersList = JSON.parse(localStorage.getItem('registeredUsersList')) || [];

      if (usersList.find(u => u.email.toLowerCase() === email.toLowerCase())) {
        if (errorMessage) {
          errorMessage.textContent = t.errExist;
          errorMessage.style.display = 'block';
        }
        if (emailInput) emailInput.classList.add('error');
        return;
      }

      const newUser = { username, email, password, loginMethod: "Manual" };
      usersList.push(newUser);
      localStorage.setItem('registeredUsersList', JSON.stringify(usersList));

      window.location.href = 'login.html';
    });
  }

  // Google Register Button (Diperbaiki)
  const googleRegBtn = document.getElementById('google-register-btn');
  if (googleRegBtn) {
    googleRegBtn.addEventListener('click', function () {
      if (window.google && google.accounts && google.accounts.id) {
        google.accounts.id.prompt((notification) => {
          if (notification.isNotDisplayed() || notification.isSkippedMoment()) {
            console.warn("Reason:", notification.getNotDisplayedReason());
            const errorMessage = document.getElementById('error-message');
            if (errorMessage) {
              errorMessage.textContent = "Gagal memuat Google Sign-In. Pastikan domain hosting sudah di-whitelist.";
              errorMessage.style.display = 'block';
            }
          }
        });
      } else {
        const errorMessage = document.getElementById('error-message');
        if (errorMessage) {
          errorMessage.textContent = "Google SDK belum siap. Periksa koneksi internet.";
          errorMessage.style.display = 'block';
        }
      }
    });
  }
});

// Google Init Callback (Diperbaiki)
window.onload = function () {
  google.accounts.id.initialize({
    client_id: "1084240465754-qnod5oaq7gpfg40l5lmi0lgnb2fihldu.apps.googleusercontent.com",
    callback: handleCredentialResponse
  });
};


// Ganti window.onload dengan pengecekan aman ini
function initGoogleAuth() {
  if (window.google && google.accounts && google.accounts.id) {
    console.log("Google SDK siap!"); // Cek ini di console
    google.accounts.id.initialize({
      client_id: 'MASUKKAN_CLIENT_ID_KAMU_DISINI',
      callback: handleCredentialResponse
    });
  } else {
    console.log("Google SDK belum siap, nunggu 500ms...");
    setTimeout(initGoogleAuth, 500);
  }
}



function handleCredentialResponse(response) {
  const payload = parseJwt(response.credential);
  if (!payload) return;

  const newUser = {
    username: payload.name,
    email: payload.email,
    password: "GOOGLE_LOGIN_USER",
    loginMethod: "Google"
  };

  let usersList = JSON.parse(localStorage.getItem('registeredUsersList')) || [];

  const exists = usersList.find(u => u.email.toLowerCase() === newUser.email.toLowerCase());
  if (!exists) {
    usersList.push(newUser);
    localStorage.setItem('registeredUsersList', JSON.stringify(usersList));
  }

  localStorage.setItem('currentUser', JSON.stringify(newUser));
  window.location.href = 'dashboard.html';
}

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    return JSON.parse(
      decodeURIComponent(
        window.atob(base64)
          .split('')
          .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
          .join('')
      )
    );
  } catch (e) {
    console.error("Gagal parse JWT token:", e);
    return null;
  }
}
