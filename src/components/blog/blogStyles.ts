export const SECURITY_STYLE = `
  .security-wrapper {
    background: #000000; color: #7b8291;
    font-family: 'Inter', sans-serif; font-weight: 300;
    min-height: 100vh; display: flex; align-items: center;
    justify-content: center; padding: 2rem;
  }
  .security-card { max-width: 400px; width: 100%; text-align: center; }
  .security-accent { width: 2rem; height: 1px; background: #5a7d9a; margin: 0 auto 2rem; opacity: 0.5; }
  .security-title { font-size: 0.8rem; text-transform: uppercase; letter-spacing: 0.3em; margin-bottom: 2.5rem; font-weight: 400; color: #5a7d9a; line-height: 1.6; }
  .security-form { display: flex; flex-direction: column; gap: 1.5rem; align-items: center; }
  .security-input { width: 100%; background: transparent; border: none; border-bottom: 1px solid #333; color: #9299a8; font-family: 'Inter', sans-serif; font-weight: 300; font-size: 1rem; padding: 0.6rem 0; text-align: center; outline: none; transition: border-color 0.4s ease; }
  .security-input:focus { border-bottom-color: #5a7d9a; }
  .security-input::placeholder { color: #333; font-size: 0.85rem; }
  .security-btn { background: transparent; border: 1px solid #333; color: #7b8291; font-family: 'Inter', sans-serif; font-size: 0.7rem; text-transform: uppercase; letter-spacing: 0.2em; padding: 0.75rem 2.5rem; cursor: pointer; transition: all 0.4s ease; margin-top: 0.5rem; }
  .security-btn:hover { border-color: #5a7d9a; color: #9299a8; }
  .error-text { color: #8b1e1e; font-size: 0.75rem; letter-spacing: 0.08em; margin-top: 0.25rem; }
  .back-link { display: inline-block; margin-top: 3.5rem; font-size: 0.65rem; color: #333; text-decoration: none; text-transform: uppercase; letter-spacing: 0.25em; transition: color 0.4s ease; }
  .back-link:hover { color: #5a7d9a; }
  @keyframes shake { 0%,100% { transform: translateX(0); } 20%,60% { transform: translateX(-6px); } 40%,80% { transform: translateX(6px); } }
  .shake { animation: shake 0.4s ease-in-out; border-bottom-color: #8b1e1e !important; }
`;

export const BLOG_STYLE = `
  .blog-wrapper {
    background: radial-gradient(circle at 50% 0%, #14141e 0%, #000000 80%);
    background-attachment: fixed;
    color: #7b8291;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
    line-height: 1.8;
    padding: 12vh 5vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    min-height: 100vh;
    position: relative;
  }

  .blog-main {
    max-width: 660px;
    width: 100%;
    position: relative;
    z-index: 2;
  }

  .blog-article {
    position: relative;
    margin-bottom: 40vh;
    padding: 2rem 0;
    opacity: 0.25;
    transform: translateY(15px);
    transition: opacity 1s cubic-bezier(0.16, 1, 0.3, 1), transform 1s cubic-bezier(0.16, 1, 0.3, 1);
  }

  .blog-article.active {
    opacity: 1;
    transform: translateY(0);
  }

  .blog-article:hover {
    opacity: 1;
  }

  .blog-article:last-of-type {
    margin-bottom: 15vh;
  }

  .blog-article::before {
    content: '';
    position: absolute;
    top: 0; left: -3rem; right: -3rem; bottom: 0;
    background: radial-gradient(ellipse at 50% 50%, var(--spotlight-glow), transparent 70%);
    opacity: 0;
    transition: opacity 0.8s ease;
    pointer-events: none;
    z-index: -1;
    border-radius: 1px;
  }

  .blog-article.active::before {
    opacity: 1;
  }

  .poem-bar {
    width: 1.5rem;
    height: 1px;
    margin-bottom: 1.5rem;
    transition: width 0.6s ease, opacity 0.6s ease;
  }

  .blog-article:hover .poem-bar {
    width: 3.5rem;
  }

  .blog-title {
    font-size: 1.4rem;
    letter-spacing: 0.02em;
    margin-bottom: 2.5rem;
    border-left: 1px solid;
    padding-left: 1.5rem;
    line-height: 1.4;
    transition: border-left-width 0.4s ease, font-weight 0.6s ease;
  }

  .blog-article:hover .blog-title {
    border-left-width: 2px;
  }

  .blog-text {
    font-size: 1.15rem;
    color: #9ca3af;
    font-family: Georgia, 'Times New Roman', serif;
    font-weight: 400;
    line-height: 2;
    letter-spacing: 0.005em;
  }

  .poem-line {
    display: inline;
  }

  .poem-line.empty {
    display: block;
    height: 1.2rem;
  }

  .poem-separator {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    margin-bottom: 40vh;
    opacity: 0.3;
    transition: opacity 0.5s ease;
  }

  .poem-separator:hover {
    opacity: 0.6;
  }

  .poem-sep-line {
    flex: 1;
    height: 1px;
    background: #222;
    transition: background 0.5s ease;
  }

  .poem-sep-symbol {
    font-size: 0.45rem;
    color: #333;
    transition: color 0.5s ease;
    flex-shrink: 0;
  }

  .eof {
    text-align: center;
    font-size: 0.6rem;
    letter-spacing: 0.4em;
    color: #333;
    margin-top: 5vh;
    margin-bottom: 10vh;
    text-transform: uppercase;
    position: relative;
  }

  .eof::before, .eof::after {
    content: '';
    display: block;
    width: 1px;
    height: 3rem;
    background: #222;
    margin: 1.5rem auto;
  }

  .nav-back-container {
    width: 100%;
    max-width: 660px;
    margin-bottom: 6vh;
    display: flex;
    justify-content: flex-start;
    z-index: 2;
    position: relative;
  }

  .nav-back-btn {
    font-size: 0.65rem;
    letter-spacing: 0.25em;
    color: #444;
    text-decoration: none;
    text-transform: uppercase;
    transition: color 0.4s ease;
  }

  .nav-back-btn:hover {
    color: #5a7d9a;
  }

  .progress-counter {
    position: fixed;
    bottom: 2rem;
    right: 2rem;
    font-size: 0.6rem;
    letter-spacing: 0.2em;
    color: #444;
    font-family: 'Inter', sans-serif;
    z-index: 10;
    user-select: none;
  }

  .progress-counter span {
    color: #5a7d9a;
    transition: color 0.5s ease;
  }

  .poem-progress-bar {
    position: fixed;
    top: 0;
    left: 0;
    height: 2px;
    z-index: 100;
    transition: width 0.4s ease, background-color 0.5s ease;
  }

  .poem-index {
    position: fixed;
    right: 2rem;
    top: 50%;
    transform: translateY(-50%);
    height: 60vh;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    z-index: 10;
    overflow: hidden;
    pointer-events: none;
  }

  .poem-index-inner {
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    gap: 0.9rem;
    transition: transform 0.6s cubic-bezier(0.16, 1, 0.3, 1);
    pointer-events: auto;
  }

  .poem-index-btn {
    display: flex;
    align-items: center;
    gap: 0.8rem;
    background: none;
    border: none;
    cursor: pointer;
    padding: 0.2rem 0;
    opacity: 0.4;
    transition: opacity 0.4s ease;
  }

  .poem-index-btn:hover,
  .poem-index-btn.active {
    opacity: 1;
  }

  .index-line {
    width: 1px;
    height: 10px;
    background: #222;
    transition: height 0.6s cubic-bezier(0.16, 1, 0.3, 1), background-color 0.6s ease;
    flex-shrink: 0;
  }

  .poem-index-btn.active .index-line {
    height: 26px;
  }

  .index-label {
    font-size: 0.55rem;
    letter-spacing: 0.2em;
    color: #555;
    text-transform: uppercase;
    opacity: 0;
    transform: translateX(10px);
    transition: opacity 0.5s cubic-bezier(0.16, 1, 0.3, 1), transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), color 0.5s ease;
    white-space: nowrap;
    font-family: 'Inter', sans-serif;
    font-weight: 300;
  }

  .poem-index-btn:hover .index-label,
  .poem-index-btn.active .index-label {
    opacity: 0.8;
    transform: translateX(0);
  }

  .poem-index-btn.active .index-label {
    opacity: 1;
  }

  ::-webkit-scrollbar { width: 4px; }
  ::-webkit-scrollbar-track { background: transparent; }
  ::-webkit-scrollbar-thumb { background: #222; border-radius: 2px; }

  @media (max-width: 900px) {
    .index-label {
      display: none;
    }
    .poem-index {
      right: 0.5rem;
      height: 50vh;
    }
    .poem-index-inner {
      gap: 0.6rem;
    }
    .poem-index-btn {
      gap: 0;
      padding: 0.4rem 0.3rem;
    }
    .index-line {
      width: 2px;
      height: 8px;
    }
    .poem-index-btn.active .index-line {
      height: 18px;
    }
  }

  @media (max-width: 640px) {
    .blog-wrapper { padding: 8vh 6vw; }
    .blog-main { max-width: 100%; }
    .blog-article { margin-bottom: 25vh; }
    .blog-title { font-size: 1.25rem; margin-bottom: 1.5rem; }
    .blog-text { font-size: 1rem; line-height: 1.8; }
    .blog-article::before { left: -1rem; right: -1rem; }
    .progress-counter { right: 1.2rem; bottom: 1.2rem; opacity: 0.4; }
  }
`;
