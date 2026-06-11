window.dailyBriefingData = {
  reportSnapshot: {
    title: "每日 PR 与足球情报日报",
    subtitle: "2026-06-11 直播弹幕快照",
    generatedAt: "2026-06-11 19:57 UTC+08:00",
    sourceNote: "工程部分仅采用本次可访问的 GitHub 与本地仓库信息；足球部分优先采用俱乐部/协会官方页面，必要时补充 Guardian 等公开权威媒体。没有可验证新增的项目已明确写明“没有近期消息”。"
  },
  bulletins: [
    {
      id: "engineering-2026-06-11",
      team: "工程动态",
      code: "DEV",
      crest: "",
      category: "PR / Review / Release / Incident",
      status: "今天无新增评审",
      title: "PR #4 与 PR #3 仍开放，今天没有检索到新的 review 或发布事故线索",
      summary: "PR #4、PR #3 继续处于 open；发布与事故源仍未接入。",
      body: "截至 2026 年 6 月 11 日，本次可验证的工程动态仍集中在 GitHub。`3031445204zelsy17-lang/hkmu_campus_platform` 的 PR #4《[手机端] feat: 上传移动端版本》仍为 open，head SHA 为 `48219dd2599a1383d0724c0111cb8fd262b338d1`，requested reviewers 仍包含 `panbaian8-svg`，当前没有 review、没有评论。PR #3《feat: add today widget prototype》也仍为 open，head SHA 为 `3806e4e5c924d3676d1e22e5e45ceb7b664a27c1`，同样没有 review、没有评论。以 `reviewed-by:panbaian8-svg updated:2026-06-11` 和 `author:panbaian8-svg updated:2026-06-11` 搜索，今天结果都为 0。本地工作区 `git remote -v` 为空，所以无法从当前仓库映射更多发布源或事故源；发布方面没有可访问的新数据源，事故方面没有可访问的新数据源。",
      date: "2026-06-11",
      watch: "继续观察 PR #4 是否出现新 review、requested reviewer 变更或新的提交；如果后续接入发布页或事故台账，再补入日报。",
      sources: [
        {
          label: "GitHub PR #4：[手机端] feat: 上传移动端版本",
          url: "https://github.com/3031445204zelsy17-lang/hkmu_campus_platform/pull/4"
        },
        {
          label: "GitHub PR #3：feat: add today widget prototype",
          url: "https://github.com/3031445204zelsy17-lang/hkmu_campus_platform/pull/3"
        },
        {
          label: "GitHub 搜索：reviewed-by:panbaian8-svg updated:2026-06-11，结果 0"
        },
        {
          label: "GitHub 搜索：author:panbaian8-svg updated:2026-06-11，结果 0"
        },
        {
          label: "本地仓库检查：git remote -v 为空"
        }
      ]
    },
    {
      id: "manutd-2026-06-11",
      team: "曼联",
      code: "MU",
      crest: "https://en.wikipedia.org/wiki/Special:FilePath/Manchester_United_FC_crest.svg",
      category: "比赛 / 伤病 / 管理层",
      status: "官方动态偏向赛程与名单",
      title: "曼联最新公开重点是米兰热身赛安排、保留名单与马兹拉维恢复进展",
      summary: "曼联近期可验证消息以赛程和名单管理为主，转会方面没有近期消息。",
      body: "曼联官网新闻页在 2026 年 6 月 10 日挂出《United will meet Milan in Wroclaw》，确认球队会在 8 月 9 日于波兰弗罗茨瓦夫与 AC 米兰踢热身赛；同一页还列出《United's retained list and released players》，说明俱乐部近期的官方重心之一是季后阵容整理。伤病方面，新闻页近两天还出现《Fitness boost for Mazraoui》，说明马兹拉维恢复情况有积极进展。曼联转会方面没有近期消息。曼联更衣室方面没有近期消息。曼联管理层方面，本次可访问来源里没有比保留名单更新的新增官方结论。",
      date: "2026-06-11",
      watch: "关注米兰热身赛前是否出现新的签约、离队或世界杯国脚伤情更新。",
      sources: [
        {
          label: "Manchester United News，2026-06-10：United will meet Milan in Wroclaw / United's retained list and released players / Fitness boost for Mazraoui",
          url: "https://www.manutd.com/en/news"
        }
      ]
    },
    {
      id: "realmadrid-2026-06-11",
      team: "皇马",
      code: "RM",
      crest: "https://en.wikipedia.org/wiki/Special:FilePath/Real_Madrid_CF.svg",
      category: "比赛 / 阵容 / 管理层",
      status: "国脚状态在线",
      title: "皇马近期主线是巴西与法国国脚热身状态，以及俱乐部治理稳定",
      summary: "维尼修斯、恩德里克、姆巴佩的国家队输出成为焦点，转会方面没有近期消息。",
      body: "皇马官网新闻页在 2026 年 6 月 10 日连续挂出《Vini Jr. and Endrick on target in Brazil's win over Egypt》和《Mbappé scores in France's final World Cup warmup》，说明维尼修斯、恩德里克和姆巴佩在世界杯前最后热身阶段都保持了直接产出。俱乐部层面，新闻页近两天还出现《Official Announcement: Our president》，反映管理层层面目前延续稳定叙事。皇马转会方面没有近期消息。皇马伤病方面没有近期新的官方伤停通报。皇马更衣室方面没有近期消息。",
      date: "2026-06-11",
      watch: "关注世界杯开赛前后这些国脚的负荷管理，以及俱乐部是否出现新的官方引援或伤情公告。",
      sources: [
        {
          label: "Real Madrid News，2026-06-10：Vini Jr. and Endrick on target in Brazil's win over Egypt / Mbappé scores in France's final World Cup warmup",
          url: "https://www.realmadrid.com/en-US/news"
        },
        {
          label: "Real Madrid News，2026-06-10：Official Announcement: Our president",
          url: "https://www.realmadrid.com/en-US/news"
        }
      ]
    },
    {
      id: "france-2026-06-11",
      team: "法国队",
      code: "FRA",
      crest: "https://en.wikipedia.org/wiki/Special:FilePath/France_national_football_team_seal.svg",
      category: "比赛 / 阵容 / 备战",
      status: "热身收官",
      title: "法国队以击败北爱尔兰完成热身，进攻线状态回暖",
      summary: "法国队完成世界杯前最后热身，阵容磨合仍是主线，伤病方面没有近期重大新通报。",
      body: "根据 Guardian 2026 年 6 月 9 日的国际比赛日直播报道，法国队在最后一场世界杯热身赛中 3 比 1 击败北爱尔兰，姆巴佩取得进球，锋线效率有回升迹象。法国足协此前也已发布对阵北爱尔兰的赛程说明，并在更早的法国对科特迪瓦一战前公布首发信息，显示德尚在最近两个窗口持续调整中前场搭配。法国队转会方面没有近期消息。法国队伤病方面没有近期新的官方重大伤停通报。法国队管理层和更衣室方面没有近期消息。",
      date: "2026-06-11",
      watch: "关注德尚最终稳定哪套锋线与中场组合，以及正式比赛前是否出现临场伤退。",
      sources: [
        {
          label: "The Guardian，2026-06-09：International football friendlies and World Cup countdown - live",
          url: "https://www.theguardian.com/football/live/2026/jun/09/international-football-friendlies-and-world-cup-countdown-live"
        },
        {
          label: "FFF：Contre l'Irlande du Nord, le 8 juin",
          url: "https://www.fff.fr/article/16641-contre-l-irlande-du-nord-le-8-juin.html"
        },
        {
          label: "FFF：Les compos pour France-Côte d'Ivoire",
          url: "https://www.fff.fr/article/16917-les-compos-pour-france-cote-d-ivoire.html"
        }
      ]
    },
    {
      id: "acmilan-2026-06-11",
      team: "AC米兰",
      code: "MIL",
      crest: "https://commons.wikimedia.org/wiki/Special:FilePath/Logo_of_AC_Milan.svg",
      category: "管理层 / 国脚 / 赛程",
      status: "近期仍缺少新官宣",
      title: "AC米兰近期最明确的公开信息仍是 RedBird 重组与国脚窗口",
      summary: "米兰今天缺少新的俱乐部级官宣，转会和更衣室方面都没有近期消息。",
      body: "AC 米兰近期最清晰的官方俱乐部信息仍是 2026 年 5 月 25 日的《RedBird Capital Partners Official Statement》，这说明管理层与足球业务重组依旧是外界理解米兰现状的主要入口。球员层面，米兰官网 2026 年 6 月 5 日发布《Maignan and Rabiot feature for France》，显示俱乐部近期公开动态更多落在国家队窗口。外部赛程层面，曼联官网 6 月 10 日确认今夏会与米兰在弗罗茨瓦夫交手。AC米兰比赛总结方面没有近期新的官方俱乐部比赛战报。AC米兰转会方面没有近期消息。AC米兰伤病方面没有近期新的官方伤停通报。AC米兰更衣室方面没有近期消息。",
      date: "2026-06-11",
      watch: "继续观察米兰官方站是否出现夏窗首批签约、离队或高层落位公告。",
      sources: [
        {
          label: "AC Milan，2026-05-25：RedBird Capital Partners Official Statement",
          url: "https://www.acmilan.com/en/news/articles/club/2026-05-25/redbird-capital-partners-official-statement"
        },
        {
          label: "AC Milan，2026-06-05：Maignan and Rabiot feature for France",
          url: "https://www.acmilan.com/en/news/articles/internationals/2026-06-05/maignan-and-rabiot-feature-for-france"
        },
        {
          label: "Manchester United News，2026-06-10：United will meet Milan in Wroclaw",
          url: "https://www.manutd.com/en/news"
        }
      ]
    },
    {
      id: "croatia-2026-06-11",
      team: "克罗地亚队",
      code: "CRO",
      crest: "https://commons.wikimedia.org/wiki/Special:FilePath/Croatian_Football_Federation_logo.svg",
      category: "比赛 / 阵容 / 备战",
      status: "经验班底冲刺",
      title: "克罗地亚队以经验和稳定为先，达利奇继续压住大赛节奏",
      summary: "克罗地亚队备战重点仍是老将负荷和伤后主力恢复，转会方面没有近期消息。",
      body: "根据 Guardian 2026 年 6 月 8 日的报道，克罗地亚在最后一场热身赛中 2 比 1 击败斯洛文尼亚，莫德里奇在颧骨手术后复出并取得进球，但达利奇也明确承认首战压力巨大，格瓦迪奥尔、科瓦契奇等人都处在伤后找节奏阶段。Guardian 6 月 9 日的另一篇前瞻还强调，克罗地亚这次仍然强依赖更衣室凝聚力与老将经验。克罗地亚队转会方面没有近期消息。克罗地亚队管理层方面没有近期消息。克罗地亚队更衣室方面没有近期消息。",
      date: "2026-06-11",
      watch: "重点看后防轮换和老将体能管理是否会在世界杯首战前继续微调。",
      sources: [
        {
          label: "The Guardian，2026-06-08：Croatia ready for England with Modric back to scoring ways after surgery",
          url: "https://www.theguardian.com/football/2026/jun/08/croatia-ready-for-england-with-modric-back-to-scoring-ways-after-surgery"
        },
        {
          label: "The Guardian，2026-06-09：Croatia manager Zlatko Dalic wants to go out in style with one more great escapade",
          url: "https://www.theguardian.com/football/2026/jun/09/croatia-manager-zlatko-dalic-world-cup-2026"
        }
      ]
    },
    {
      id: "brazil-2026-06-11",
      team: "巴西队",
      code: "BRA",
      crest: "https://commons.wikimedia.org/wiki/Special:FilePath/Brazilian_Football_Confederation_logo.svg",
      category: "比赛 / 阵容 / 伤病",
      status: "锋线脚感不错",
      title: "巴西队最后热身继续赢球，维尼修斯与恩德里克维持输出",
      summary: "巴西队进攻端状态在线；内马尔恢复进展仍以媒体口径为主，未见新官方重伤公告。",
      body: "皇马官网 2026 年 6 月 10 日消息显示，巴西在世界杯前最后一场热身赛中 2 比 1 击败埃及，维尼修斯与恩德里克都取得进球，这让巴西锋线的速度和终结感继续保持热度。与此同时，Guardian 6 月 9 日国际比赛日直播里提到内马尔恢复情况积极，但这一点属于媒体报道，不是巴西足协当天新增官宣，因此只能视作未确认的积极信号。巴西队转会方面没有近期消息。巴西队管理层方面没有近期消息。巴西队更衣室方面没有近期消息。巴西队伤病方面没有近期新的官方重大伤停公告。",
      date: "2026-06-11",
      watch: "继续关注内马尔训练负荷与首战出场节奏，以及巴西后场是否会再有临时名单调整。",
      sources: [
        {
          label: "Real Madrid News，2026-06-10：Vini Jr. and Endrick on target in Brazil's win over Egypt",
          url: "https://www.realmadrid.com/en-US/news"
        },
        {
          label: "The Guardian，2026-06-09：International football friendlies and World Cup countdown - live",
          url: "https://www.theguardian.com/football/live/2026/jun/09/international-football-friendlies-and-world-cup-countdown-live"
        }
      ]
    }
  ]
};
