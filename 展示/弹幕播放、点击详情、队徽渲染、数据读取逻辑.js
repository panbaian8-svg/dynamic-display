const fallbackSnapshot = {
  title: "每日 PR 与足球情报日报",
  subtitle: "直播间弹幕版",
  generatedAt: "2026-06-08 17:13（UTC+8）",
  sourceNote: "内容来自原有自动化项目最近一次可验证成稿快照。"
};

const fallbackBulletins = [
  {
    id: "engineering-open-prs",
    team: "工程动态",
    code: "DEV",
    crest: "",
    category: "PR / Review",
    status: "今日无新增",
    title: "PR #4 仍待评审，今天没有新增 review",
    summary:
      "hkmu_campus_platform 当前仍有 2 条 open PR；6 月 8 日没有检索到 panbaian8-svg 的新增 PR 或评审动作。",
    body:
      "原有自动化在 2026 年 6 月 8 日的成稿快照中确认：本地仓库没有绑定远端，GitHub 可见动态仍集中在 3031445204zelsy17-lang/hkmu_campus_platform。PR #4 保持 open，96 个改动文件，requested reviewer 包含 panbaian8-svg；PR #3 也仍处于 open，且两条 PR 都没有新的评论或 review 记录。发布与事故数据源当前没有接入，因此日报明确写成“暂无可验证新增”，不会虚构事件补空白。",
    date: "2026-06-08",
    watch:
      "如果后续要把这个页面接成真自动化，可以把每日 PR、发布和事故结果先落成 JSON，再由前端直接读取。",
    sources: [
      {
        label: "GitHub PR #4: [手机端] feat: 上传移动端版本",
        url: "https://github.com/3031445204zelsy17-lang/hkmu_campus_platform/pull/4"
      },
      {
        label: "GitHub PR #3: feat: add today widget prototype",
        url: "https://github.com/3031445204zelsy17-lang/hkmu_campus_platform/pull/3"
      },
      {
        label: "自动化快照：本地仓库 git remote -v 为空，发布与事故源未接入"
      }
    ]
  },
  {
    id: "manutd-transfers",
    team: "曼联",
    code: "MU",
    crest: "https://en.wikipedia.org/wiki/Special:FilePath/Manchester_United_FC_crest.svg",
    category: "阵容 / 管理层",
    status: "官宣为主",
    title: "霍伊伦德离队，希顿与卡里克完成续约",
    summary:
      "曼联近期最明确的变化集中在前锋离队、门将续约和教练组续约，而不是新的伤病公告。",
    body:
      "6 月 8 日自动化成稿时，曼联被整理成三条可验证主线：官网新闻流出现“霍伊伦德转会那不勒斯”；汤姆·希顿续约到 2027 年；卡里克执教合同延长到 2028 年，教练团队同步续约。自动化没有把传闻写进正文，因此当前这条更适合作为“阵容和管理层稳定中的明确变化”来播报。",
    date: "2026-06-08",
    watch: "继续关注世界杯期间国脚状态，以及夏窗后续是否出现新的正式签约。",
    sources: [
      {
        label: "Manchester United 官方新闻流",
        url: "https://www.manutd.com/en/news"
      },
      {
        label: "Why Heaton is delighted to remain at United",
        url: "https://www.manutd.com/en/news/tom-heaton-discusses-new-manchester-united-contract-june-2026"
      },
      {
        label: "Carrick continues as United head coach",
        url: "https://www.manutd.com/ko/news/michael-carrick-continues-as-man-united-head-coach-2026"
      }
    ]
  },
  {
    id: "realmadrid-leadership",
    team: "皇马",
    code: "RM",
    crest: "https://en.wikipedia.org/wiki/Special:FilePath/Real_Madrid_CF.svg",
    category: "管理层 / 世界杯关联",
    status: "管理层稳定",
    title: "皇马主线仍是管理层稳定与阿拉巴告别",
    summary:
      "最近一次自动化快照里，皇马没有新增大额转会官宣，焦点集中在弗洛伦蒂诺连任与阿拉巴离队致谢。",
    body:
      "原有自动化引用的官方来源显示，弗洛伦蒂诺在 6 月 7 日继续担任俱乐部主席；更衣室层面，5 月 22 日已官宣阿拉巴离队，并发布致谢内容。世界杯关联方面，维尼修斯和恩德里克在巴西队热身赛中的表现，成为近期与皇马一线队最相关的赛场信号，因此这条消息兼具俱乐部稳定和国家队联动两层含义。",
    date: "2026-06-08",
    watch: "关注世界杯前后是否出现正式引援，或者一线队新的伤病通报。",
    sources: [
      {
        label: "Florentino Perez presidente del Real Madrid",
        url: "https://www.realmadrid.com/en-US/news/club/latest-news/florentino-perez-presidente-del-real-madrid-07-06-2026"
      },
      {
        label: "Official Statement: Alaba",
        url: "https://www.realmadrid.com/en-US/news/club/announcements/comunicado-oficial-alaba-22-05-2026"
      },
      {
        label: "Thank you, Alaba!",
        url: "https://www.realmadrid.com/en-US/news/football/first-team/latest-news/gracias-alaba-22-05-2026"
      }
    ]
  },
  {
    id: "france-prep",
    team: "法国队",
    code: "FRA",
    crest: "https://en.wikipedia.org/wiki/Special:FilePath/France_national_football_team_seal.svg",
    category: "世界杯备战",
    status: "持续磨合",
    title: "法国队的最后热身窗口仍在磨合阵容",
    summary:
      "自动化快照将法国队归纳为“科特迪瓦与北爱尔兰两战 + 阵容磨合 + 伤退观察”。",
    body:
      "6 月 8 日成稿时，原有自动化把法国队的重点放在世界杯前最后一段热身窗口。可验证公开源显示，法国队先后面对科特迪瓦与北爱尔兰，主线不是单一比分，而是德尚如何继续轮换锋线和中场组合，以及伤病名单是否进一步扩大。因此这条弹幕会更强调“备战状态”和“用人观察”，而不是只报一个赛果。",
    date: "2026-06-08",
    watch: "下一步最值得盯的是主力组合是否收敛，以及伤病名单有没有新增。",
    sources: [
      {
        label: "FFF: France-Côte d'Ivoire 阵容页",
        url: "https://www.fff.fr/article/16917-les-compos-pour-france-cote-d-ivoire.html"
      },
      {
        label: "FFF: Contre l'Irlande du Nord le 8 juin",
        url: "https://www.fff.fr/article/16641-contre-l-irlande-du-nord-le-8-juin.html"
      }
    ]
  },
  {
    id: "acmilan-restructure",
    team: "AC米兰",
    code: "MIL",
    crest: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_AC_Milan.svg",
    category: "管理层 / 国脚动态",
    status: "管理层调整",
    title: "AC 米兰近期焦点仍是管理层重组",
    summary:
      "相较转会传闻，自动化项目更明确地保留了 5 月 25 日 RedBird 足球业务重组这条已官宣信息。",
    body:
      "最新快照里，米兰被刻意写成“消息稀少但结论清晰”：RedBird 在 5 月 25 日宣布足球业务重组，是目前最确定的俱乐部级动态；球员层面更多是迈尼昂等国脚的国家队出场信息，还不足以构成新的俱乐部官宣。这个处理方式也很适合弹幕产品，因为能把“没有近期确定消息”清楚播出来，而不是强行制造热度。",
    date: "2026-06-08",
    watch: "等夏窗首批正式公告落地后，再把转会和阵容变化扩成新的弹幕条目。",
    sources: [
      {
        label: "RedBird Capital Partners Official Statement",
        url: "https://www.acmilan.com/en/news/articles/club/2026-05-25/redbird-capital-partners-official-statement"
      },
      {
        label: "Maignan and Rabiot feature for France",
        url: "https://www.acmilan.com/en/news/articles/internationals/2026-06-05/maignan-and-rabiot-feature-for-france"
      },
      {
        label: "AC Milan Latest News",
        url: "https://www.acmilan.com/en/news/articles/latest"
      }
    ]
  },
  {
    id: "croatia-squad",
    team: "克罗地亚队",
    code: "CRO",
    crest: "https://commons.wikimedia.org/wiki/Special:FilePath/Croatian_Football_Federation_logo.svg",
    category: "世界杯备战",
    status: "经验班底",
    title: "克罗地亚继续用成熟班底推进世界杯备战",
    summary:
      "自动化快照里的关键信号是热身赛负于比利时、格瓦迪奥尔回归，以及球队驻地安排已公开。",
    body:
      "原有自动化没有把克罗地亚写成“新鲜转会故事”，而是直接回到世界杯主线：热身赛结果说明节奏仍在调整，FIFA 对名单的梳理强调了经验与年轻球员混编，而 HNS 公开的驻地与媒体安排则表明球队已经进入比赛周节奏。这个队的弹幕重点因此应该是阵容稳定、老将负荷和后防轮换。",
    date: "2026-06-08",
    watch: "继续关注老将负荷控制，以及后防轮换是否还会微调。",
    sources: [
      {
        label: "HNS News Archive",
        url: "https://hns.family/en/news/?cid=125"
      },
      {
        label: "FIFA: Croatia squad named",
        url: "https://www.fifa.com/en/articles/croatia-squad-named"
      },
      {
        label: "HNS Media Information",
        url: "https://hns.family/en/media/information/"
      }
    ]
  },
  {
    id: "brazil-injuries",
    team: "巴西队",
    code: "BRA",
    crest: "https://commons.wikimedia.org/wiki/Special:FilePath/Brazilian_Football_Confederation_logo.svg",
    category: "伤病 / 备战",
    status: "伤病观察",
    title: "巴西热身赛连胜，但伤病与补招仍是主线",
    summary:
      "自动化快照把巴西的核心信息收敛为三件事：热身赛连胜、内马尔伤情观察、韦斯利伤退后补招埃德森。",
    body:
      "6 月 8 日成稿时，巴西最强的信号并不是单纯比分，而是阵容可用性。FIFA 与巴西足协公开信息显示，球队在热身阶段赢下巴拿马与埃及，但内马尔恢复进度仍受关注，韦斯利伤退后的替补征召也提示后防配置还在动态调整。所以这条弹幕需要把“赢球”和“伤病管理”同时说清楚。",
    date: "2026-06-08",
    watch: "重点盯内马尔训练负荷、首战出场时间，以及后防替补方案是否稳定。",
    sources: [
      {
        label: "FIFA: Brasil 6-2 Panamá",
        url: "https://www.fifa.com/pt/tournaments/mens/worldcup/canadamexicousa2026/articles/brasil-panama-copa-mundo-amistoso-2026"
      },
      {
        label: "FIFA: Brasil 2-1 Egito",
        url: "https://www.fifa.com/pt/tournaments/mens/worldcup/canadamexicousa2026/articles/brasil-egito-amistoso-copa-2026"
      },
      {
        label: "CBF: Wesley 伤退，Ederson 补招",
        url: "https://www.cbf.com.br/selecao-brasileira/noticias/index/wesley-e-desconvocado-ederson-e-convocado-para-a-copa-do-mundo"
      }
    ]
  }
];

const liveData = window.dailyBriefingData ?? {};
const reportSnapshot = liveData.reportSnapshot ?? fallbackSnapshot;
const bulletins = Array.isArray(liveData.bulletins) && liveData.bulletins.length > 0
  ? liveData.bulletins
  : fallbackBulletins;

const teamThemes = {
  工程动态: {
    color: "#1f5368",
    badge: "#123541",
    rail: "rgba(31, 83, 104, 0.34)"
  },
  曼联: {
    color: "#8f1622",
    badge: "#5c0f18",
    rail: "rgba(143, 22, 34, 0.34)"
  },
  皇马: {
    color: "#536985",
    badge: "#b89a4f",
    rail: "rgba(83, 105, 133, 0.34)"
  },
  法国队: {
    color: "#17386e",
    badge: "#10254a",
    rail: "rgba(23, 56, 110, 0.34)"
  },
  AC米兰: {
    color: "#7f1725",
    badge: "#171717",
    rail: "rgba(127, 23, 37, 0.34)"
  },
  克罗地亚队: {
    color: "#264b8f",
    badge: "#9a2035",
    rail: "rgba(38, 75, 143, 0.34)"
  },
  巴西队: {
    color: "#1e6a3d",
    badge: "#6c741d",
    rail: "rgba(30, 106, 61, 0.34)"
  }
};

const stage = document.querySelector("#danmakuStage");
const rail = document.querySelector("#messageRail");
const toggleMotionButton = document.querySelector("#toggleMotion");
const openBriefingButton = document.querySelector("#openBriefing");
const closeDialogButton = document.querySelector("#closeDialog");
const dialog = document.querySelector("#briefingDialog");
const snapshotStamp = document.querySelector("#snapshotStamp");
const dialogSnapshot = document.querySelector("#dialogSnapshot");
const coverageCount = document.querySelector("#coverageCount");
const legendContainers = [
  document.querySelector("#teamLegend"),
  document.querySelector("#dialogLegend")
];

const detailPanel = {
  accent: document.querySelector("#detailAccent"),
  badge: document.querySelector("#detailBadge"),
  title: document.querySelector("#detailTitle"),
  summary: document.querySelector("#detailSummary"),
  team: document.querySelector("#detailTeam"),
  date: document.querySelector("#detailDate"),
  category: document.querySelector("#detailCategory"),
  status: document.querySelector("#detailStatus"),
  body: document.querySelector("#detailBody"),
  sources: document.querySelector("#detailSources"),
  watch: document.querySelector("#detailWatch")
};

const state = {
  activeCard: null,
  dialogOpen: false,
  isPaused: false,
  laneIndex: 0,
  messageIndex: 0,
  spawnTimer: null,
  burstTimers: []
};

const laneOffsets = [34, 110, 186, 262, 338];

function renderLogo(item, className) {
  if (!item.crest) {
    return `<span class="${className} logo-fallback">${item.code}</span>`;
  }

  return `
    <span class="${className}">
      <img src="${item.crest}" alt="${item.team}队徽" loading="lazy" onerror="this.style.display='none'; this.nextElementSibling.style.display='inline-flex';">
      <span class="logo-fallback">${item.code}</span>
    </span>
  `;
}

function buildLegendChip(team) {
  const chip = document.createElement("div");
  const theme = teamThemes[team];
  const sample = bulletins.find((item) => item.team === team);

  chip.className = "theme-chip";
  chip.style.backgroundColor = theme.color;
  chip.innerHTML = `
    ${renderLogo(sample, "theme-icon")}
    <span class="theme-copy">
      <span class="theme-name">${team}</span>
      <span class="theme-meta">${sample.category}</span>
    </span>
  `;

  return chip;
}

function renderLegend() {
  const uniqueTeams = [...new Set(bulletins.map((item) => item.team))];

  legendContainers.forEach((container) => {
    container.innerHTML = "";
    uniqueTeams.forEach((team) => container.appendChild(buildLegendChip(team)));
  });
}

function renderSummary() {
  snapshotStamp.textContent = reportSnapshot.generatedAt;
  dialogSnapshot.textContent = reportSnapshot.generatedAt;
  coverageCount.textContent = `${bulletins.length} 条可点击消息`;
}

function findRailCard(item) {
  return rail.querySelector(`[data-id="${item.id}"]`);
}

function renderSources(sources) {
  detailPanel.sources.innerHTML = "";

  sources.forEach((source) => {
    const listItem = document.createElement("li");

    if (source.url) {
      const link = document.createElement("a");
      link.href = source.url;
      link.target = "_blank";
      link.rel = "noreferrer";
      link.textContent = source.label;
      listItem.appendChild(link);
    } else {
      const plain = document.createElement("span");
      plain.className = "source-plain";
      plain.textContent = source.label;
      listItem.appendChild(plain);
    }

    detailPanel.sources.appendChild(listItem);
  });
}

function renderDetail(item, cardElement = null) {
  const theme = teamThemes[item.team];

  detailPanel.accent.style.backgroundColor = theme.color;
  detailPanel.badge.style.backgroundColor = theme.badge;
  detailPanel.badge.innerHTML = renderLogo(item, "badge-logo");
  detailPanel.title.textContent = item.title;
  detailPanel.summary.textContent = item.summary;
  detailPanel.team.textContent = item.team;
  detailPanel.date.textContent = item.date;
  detailPanel.category.textContent = item.category;
  detailPanel.status.textContent = item.status;
  detailPanel.body.textContent = item.body;
  detailPanel.watch.textContent = item.watch;
  renderSources(item.sources);

  if (state.activeCard) {
    state.activeCard.classList.remove("is-active");
  }

  if (cardElement) {
    state.activeCard = cardElement;
    state.activeCard.classList.add("is-active");
  }
}

function createRailCard(item) {
  const theme = teamThemes[item.team];
  const card = document.createElement("button");

  card.type = "button";
  card.className = "rail-card";
  card.dataset.id = item.id;
  card.style.backgroundColor = theme.rail;
  card.innerHTML = `
    <div class="rail-head">
      <span class="rail-team">
        ${renderLogo(item, "theme-icon")}
        ${item.team}
      </span>
      <span class="rail-status">${item.status}</span>
    </div>
    <h4>${item.title}</h4>
    <p>${item.summary}</p>
  `;

  card.addEventListener("click", () => {
    renderDetail(item, card);
    if (state.dialogOpen) {
      spawnBullet(item);
    }
  });

  return card;
}

function renderRail() {
  rail.innerHTML = "";
  bulletins.forEach((item) => rail.appendChild(createRailCard(item)));
}

function createBullet(item) {
  const theme = teamThemes[item.team];
  const bullet = document.createElement("button");
  const travelDistance = stage.clientWidth + 760;

  bullet.type = "button";
  bullet.className = "bullet";
  bullet.style.top = `${laneOffsets[state.laneIndex % laneOffsets.length]}px`;
  bullet.style.backgroundColor = theme.color;
  bullet.style.animationDuration = `${18 + Math.min(item.summary.length / 12, 8)}s`;
  bullet.style.setProperty("--travel-distance", `${travelDistance}px`);
  bullet.dataset.id = item.id;
  bullet.innerHTML = `
    <span class="bullet-badge" style="background-color:${theme.badge}">
      ${renderLogo(item, "badge-logo")}
    </span>
    <span class="bullet-copy">
      <span class="bullet-title">${item.title}</span>
      <span class="bullet-meta">
        <span>${item.team}</span>
        <span>${item.category}</span>
        <span>${item.date}</span>
      </span>
    </span>
  `;

  bullet.addEventListener("click", () => {
    renderDetail(item, findRailCard(item));
  });

  bullet.addEventListener("animationend", () => {
    bullet.remove();
  });

  return bullet;
}

function spawnBullet(item = null) {
  const currentItem = item ?? bulletins[state.messageIndex % bulletins.length];
  const bullet = createBullet(currentItem);

  stage.appendChild(bullet);
  state.laneIndex += 1;

  if (!item) {
    state.messageIndex += 1;
  }
}

function clearStage() {
  stage.querySelectorAll(".bullet").forEach((bullet) => bullet.remove());
}

function clearTimers() {
  clearInterval(state.spawnTimer);
  state.spawnTimer = null;
  state.burstTimers.forEach((timer) => clearTimeout(timer));
  state.burstTimers = [];
}

function scheduleTicker() {
  clearInterval(state.spawnTimer);

  if (!state.dialogOpen || state.isPaused) {
    return;
  }

  state.spawnTimer = setInterval(() => {
    spawnBullet();
  }, 4600);
}

function primeTicker() {
  clearStage();
  clearTimers();
  state.laneIndex = 0;
  state.messageIndex = 0;

  const openingBurst = bulletins.slice(0, Math.min(3, bulletins.length));

  openingBurst.forEach((item, index) => {
    const timer = setTimeout(() => {
      if (!state.dialogOpen || state.isPaused) {
        return;
      }
      spawnBullet(item);
      state.messageIndex = index + 1;
    }, index * 1300);

    state.burstTimers.push(timer);
  });

  const tickerStart = setTimeout(() => {
    scheduleTicker();
  }, openingBurst.length * 1300 + 900);

  state.burstTimers.push(tickerStart);
}

function setPauseUi() {
  stage.classList.toggle("is-motion-paused", state.isPaused);
  toggleMotionButton.textContent = state.isPaused ? "继续弹幕" : "暂停弹幕";
}

function openDialog() {
  if (state.dialogOpen) {
    return;
  }

  state.dialogOpen = true;
  state.isPaused = false;
  setPauseUi();
  dialog.setAttribute("aria-hidden", "false");
  document.body.classList.add("dialog-open");
  openBriefingButton.setAttribute("aria-expanded", "true");
  renderDetail(bulletins[0], findRailCard(bulletins[0]));
  primeTicker();
  closeDialogButton.focus();
}

function closeDialog() {
  state.dialogOpen = false;
  clearTimers();
  clearStage();
  dialog.setAttribute("aria-hidden", "true");
  document.body.classList.remove("dialog-open");
  openBriefingButton.setAttribute("aria-expanded", "false");
  openBriefingButton.focus();
}

function toggleMotion() {
  state.isPaused = !state.isPaused;
  setPauseUi();

  if (state.isPaused) {
    clearInterval(state.spawnTimer);
    state.spawnTimer = null;
    return;
  }

  scheduleTicker();
}

openBriefingButton.addEventListener("click", openDialog);
closeDialogButton.addEventListener("click", closeDialog);
toggleMotionButton.addEventListener("click", toggleMotion);

dialog.addEventListener("click", (event) => {
  if (event.target instanceof HTMLElement && event.target.dataset.closeDialog === "true") {
    closeDialog();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && state.dialogOpen) {
    closeDialog();
  }
});

renderLegend();
renderSummary();
renderRail();
renderDetail(bulletins[0], findRailCard(bulletins[0]));
