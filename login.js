// GANTI DENGAN CLIENT ID ASLI DARI GOOGLE CLOUD CONSOLE
const GOOGLE_CLIENT_ID = "1084240465754-qnod5oaq7gpfg40i5lmi0ignb2fihidu.apps.googleusercontent.com";


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
    emailPlaceholder: "Enter your email",
    password: "Password",
    passwordPlaceholder: "Enter your password",
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
    email: "电子邮件",
    emailPlaceholder: "请输入电子邮件",
    password: "密码",
    passwordPlaceholder: "请输入密码",
    submitBtn: "登录",
    googleBtn: "使用 Google 继续",
    txtSwitch: "还没有账户？",
    linkSwitch: "立即注册",
    errNoUser: "未找到注册账户！请先注册。",
    errWrong: "电子邮件或密码错误！",
    flagUrl: "https://flagcdn.com/w40/cn.png"
  },
  de: {
    title: "Anmelden",
    subtitle: "Melden Sie sich in Ihrem Konto an",
    email: "E-Mail",
    emailPlaceholder: "E-Mail eingeben",
    password: "Passwort",
    passwordPlaceholder: "Passwort eingeben",
    submitBtn: "Anmelden",
    googleBtn: "Weiter mit Google",
    txtSwitch: "Noch kein Konto?",
    linkSwitch: "Jetzt registrieren",
    errNoUser: "Kein Konto gefunden! Bitte zuerst registrieren.",
    errWrong: "E-Mail oder Passwort falsch!",
    flagUrl: "https://flagcdn.com/w40/de.png"
  },
  fr: {
    title: "Connexion",
    subtitle: "Connectez-vous à votre compte",
    email: "E-mail",
    emailPlaceholder: "Entrez votre e-mail",
    password: "Mot de passe",
    passwordPlaceholder: "Entrez votre mot de passe",
    submitBtn: "Se connecter",
    googleBtn: "Continuer avec Google",
    txtSwitch: "Vous n'avez pas de compte ?",
    linkSwitch: "S'inscrire",
    errNoUser: "Aucun compte trouvé ! Veuillez vous inscrire.",
    errWrong: "E-mail ou mot de passe incorrect !",
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

  // Form Login
  const loginForm = document.getElementById('login-form');
  if (loginForm) {
    loginForm.addEventListener('submit', function (event) {
      event.preventDefault();

      const emailInput = document.getElementById('email');
      const errorMessage = document.getElementById('error-message');
      const activeLang = localStorage.getItem('selectedLang') || 'id';
      const t = translations[activeLang];

      if (errorMessage) {
        errorMessage.style.display = 'none';
        errorMessage.textContent = '';
      }
      if (emailInput) emailInput.classList.remove('error');
      if (passwordInput) passwordInput.classList.remove('error');

      const usersList = JSON.parse(localStorage.getItem('registeredUsersList')) || [];

      const matchedUser = usersList.find(user => 
        user.email.toLowerCase() === emailInput.value.toLowerCase() && 
        user.password === passwordInput.value
      );

      if (matchedUser) {
        localStorage.setItem('currentUser', JSON.stringify(matchedUser));
        window.location.href = 'dashboard.html';
      } else {
        if (errorMessage) {
          errorMessage.textContent = usersList.length === 0 ? t.errNoUser : t.errWrong;
          errorMessage.style.display = 'block';
        }
        
        if (emailInput) emailInput.classList.add('error');
        if (passwordInput) {
          passwordInput.classList.add('error');
          passwordInput.value = '';
          passwordInput.setAttribute('type', 'password');
          if (eyeIcon) eyeIcon.innerHTML = eyeOpenSVG;
          passwordInput.focus();
        }
      }
    });
  }

  // Google Login Button (Diperbaiki)
  const googleBtn = document.getElementById('google-login-btn');
  if (googleBtn) {
    googleBtn.addEventListener('click', function () {
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
  initGoogleAuth();
};

function initGoogleAuth() {
  if (window.google && google.accounts && google.accounts.id) {
    google.accounts.id.initialize({
      client_id: GOOGLE_CLIENT_ID,
      callback: handleCredentialResponse,
      auto_select: false,
      cancel_on_tap_outside: true
    });
  }
}

function handleCredentialResponse(response) {
  const responsePayload = parseJwt(response.credential);
  if (!responsePayload) return;

  const googleUser = {
    username: responsePayload.name,
    email: responsePayload.email,
    picture: responsePayload.picture,
    loginMethod: "Google"
  };

  localStorage.setItem('currentUser', JSON.stringify(googleUser));
  window.location.href = 'dashboard.html';
}

function parseJwt(token) {
  try {
    const base64Url = token.split('.')[1];
    const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    const jsonPayload = decodeURIComponent(
      window.atob(base64)
        .split('')
        .map(c => '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2))
        .join('')
    );
    return JSON.parse(jsonPayload);
  } catch (e) {
    console.error("Gagal parse JWT token:", e);
    return null;
  }
}
