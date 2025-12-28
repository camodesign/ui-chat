import { useMemo, useState } from "react";

const chats = [
  {
    id: "alpha",
    name: "Nova Analyst",
    role: "Synthetic PM",
    snippet: "Drafting a comparative insight report now.",
    time: "2m",
  },
  {
    id: "beta",
    name: "Orion Researcher",
    role: "Synthetic UX",
    snippet: "Noted the tension around onboarding latency.",
    time: "16m",
  },
  {
    id: "gamma",
    name: "Lyra Strategist",
    role: "Synthetic GTM",
    snippet: "We should test the new targeting model.",
    time: "1h",
  },
  {
    id: "delta",
    name: "Atlas Builder",
    role: "Synthetic Dev",
    snippet: "I can simulate a rollout plan if needed.",
    time: "3h",
  },
];

const messages = [
  {
    id: 1,
    author: "synthetic",
    name: "Nova Analyst",
    text: "Good morning. I mapped the emotional arc for the last 12 interviews and flagged 3 moments of friction.",
    emotion: "Insightful",
    emotionColor: "blue",
    time: "09:14",
  },
  {
    id: 2,
    author: "human",
    name: "You",
    text: "Show me the friction points tied to pricing anxiety.",
    time: "09:15",
  },
  {
    id: 3,
    author: "synthetic",
    name: "Nova Analyst",
    text: "The strongest spike appears when we ask for annual commitment before trust is established. A softer ladder works better.",
    emotion: "Curious",
    emotionColor: "purple",
    time: "09:16",
  },
  {
    id: 4,
    author: "human",
    name: "You",
    text: "Let’s design a rapid test for that ladder.",
    time: "09:17",
  },
];

const profile = {
  name: "Nova Analyst",
  title: "Synthetic Product Strategist",
  location: "Berlin, DE",
  traits: ["Analytical", "Empathetic", "Systems thinker"],
  summary:
    "Nova synthesizes qualitative signals into structured insights, balancing empathy with measurable outcomes. Best used for strategy research and rapid hypothesis validation.",
  highlights: [
    "8 years equivalent product strategy experience",
    "Focuses on emotional drivers and trust signals",
    "Specialized in onboarding and pricing narratives",
  ],
};

const emotionPalette = {
  blue: "var(--emotion-blue)",
  red: "var(--emotion-red)",
  purple: "var(--emotion-purple)",
  green: "var(--emotion-green)",
  yellow: "var(--emotion-yellow)",
};

const userOptions = [
  {
    id: "nova",
    name: "Nova Analyst",
    tag: "Synthetic PM",
    description: "Sharp synthesis and rapid insight extraction.",
    emotion: "Calm",
    emotionColor: "blue",
  },
  {
    id: "orion",
    name: "Orion Researcher",
    tag: "Synthetic UX",
    description: "Deep empathy, investigative, and detail-oriented.",
    emotion: "Curious",
    emotionColor: "purple",
  },
  {
    id: "lyra",
    name: "Lyra Strategist",
    tag: "Synthetic GTM",
    description: "Market-aware, bold, and experimentation-heavy.",
    emotion: "Driven",
    emotionColor: "red",
  },
  {
    id: "atlas",
    name: "Atlas Builder",
    tag: "Synthetic Dev",
    description: "Systematic, pragmatic, and delivery-focused.",
    emotion: "Focused",
    emotionColor: "green",
  },
];

const tabs = [
  { id: "chat", label: "Chat Screen" },
  { id: "empty", label: "Empty State" },
  { id: "design", label: "Design System" },
];

function App() {
  const [activeTab, setActiveTab] = useState("chat");
  const [showSelectModal, setShowSelectModal] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);

  const activeTabLabel = useMemo(
    () => tabs.find((tab) => tab.id === activeTab)?.label ?? "",
    [activeTab]
  );

  return (
    <div className="app">
      <header className="top-bar">
        <div>
          <p className="eyebrow">Synthetic Research Suite</p>
          <h1>Neo-Futuristic Chat UI</h1>
          <p className="subtle">{activeTabLabel}</p>
        </div>
        <div className="tab-list" role="tablist">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={`tab ${activeTab === tab.id ? "active" : ""}`}
              onClick={() => setActiveTab(tab.id)}
              role="tab"
              type="button"
            >
              {tab.label}
            </button>
          ))}
        </div>
      </header>

      <main className="page">
        {activeTab === "chat" && (
          <section className="chat-layout">
            <aside className="sidebar">
              <div className="sidebar-header">
                <div>
                  <p className="eyebrow">Workspace</p>
                  <h2>Synthetic Users</h2>
                </div>
                <button
                  className="button ghost"
                  type="button"
                  onClick={() => setShowSelectModal(true)}
                >
                  Select user
                </button>
              </div>
              <div className="search-field">
                <input
                  type="search"
                  placeholder="Search sessions"
                  aria-label="Search sessions"
                />
                <span className="search-icon">⌘K</span>
              </div>
              <div className="chat-list">
                {chats.map((chat) => (
                  <button
                    key={chat.id}
                    className={`chat-card ${chat.id === "alpha" ? "active" : ""}`}
                    type="button"
                  >
                    <div className="avatar">{chat.name[0]}</div>
                    <div className="chat-meta">
                      <div className="chat-row">
                        <span className="chat-name">{chat.name}</span>
                        <span className="chat-time">{chat.time}</span>
                      </div>
                      <p className="chat-role">{chat.role}</p>
                      <p className="chat-snippet">{chat.snippet}</p>
                    </div>
                  </button>
                ))}
              </div>
            </aside>

            <section className="chat-panel">
              <header className="chat-header">
                <div className="chat-title">
                  <div className="avatar large">N</div>
                  <div>
                    <h2>Nova Analyst</h2>
                    <p className="subtle">Synthetic Product Strategist · Active</p>
                  </div>
                </div>
                <div className="header-actions">
                  <button className="button ghost" type="button">
                    Regenerate
                  </button>
                  <button className="button ghost" type="button">
                    Copy
                  </button>
                  <button
                    className="button primary"
                    type="button"
                    onClick={() => setShowProfileModal(true)}
                  >
                    Export
                  </button>
                </div>
              </header>

              <div className="messages">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`message ${message.author}`}
                  >
                    <div className="avatar">{message.name[0]}</div>
                    <div className="message-body">
                      <div className="message-card">
                        <div className="message-header">
                          <span>{message.name}</span>
                          <span className="time">{message.time}</span>
                        </div>
                        <p>{message.text}</p>
                        {message.emotion && (
                          <span
                            className={`emotion-chip ${message.emotionColor}`}
                            style={{
                              background: emotionPalette[message.emotionColor],
                            }}
                          >
                            {message.emotion}
                          </span>
                        )}
                      </div>
                      <div className="message-actions">
                        <button className="icon-button" type="button">
                          Copy
                        </button>
                        <button className="icon-button" type="button">
                          Export
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="input-bar">
                <div className="input-field">
                  <input
                    type="text"
                    placeholder="Ask a synthetic user anything..."
                    aria-label="Message input"
                  />
                  <button className="button primary" type="button">
                    Send
                  </button>
                </div>
                <div className="input-hints">
                  <span>Shift + Enter for new line</span>
                  <span className="dot" />
                  <span>Response style: Insightful</span>
                </div>
              </div>
            </section>
          </section>
        )}

        {activeTab === "empty" && (
          <section className="empty-state">
            <div className="empty-card">
              <div className="glow" />
              <p className="eyebrow">No session selected</p>
              <h2>Start a new synthetic conversation</h2>
              <p className="subtle">
                Choose a synthetic persona to generate insights, validate
                hypotheses, and document emotional resonance.
              </p>
              <div className="empty-actions">
                <button
                  className="button primary"
                  type="button"
                  onClick={() => setShowSelectModal(true)}
                >
                  Select synthetic user
                </button>
                <button className="button ghost" type="button">
                  Explore design system
                </button>
              </div>
            </div>
          </section>
        )}

        {activeTab === "design" && (
          <section className="design-system">
            <div className="design-grid">
              <div className="design-card">
                <h3>Buttons</h3>
                <div className="stack-row">
                  <button className="button primary" type="button">
                    Primary
                  </button>
                  <button className="button secondary" type="button">
                    Secondary
                  </button>
                  <button className="button ghost" type="button">
                    Ghost
                  </button>
                </div>
              </div>
              <div className="design-card">
                <h3>Emotion Chips</h3>
                <div className="stack-row">
                  {Object.entries(emotionPalette).map(([key, value]) => (
                    <span
                      key={key}
                      className={`emotion-chip ${key}`}
                      style={{ background: value }}
                    >
                      {key}
                    </span>
                  ))}
                </div>
              </div>
              <div className="design-card">
                <h3>Inputs</h3>
                <div className="stack">
                  <input type="text" placeholder="Search insights" />
                  <textarea
                    rows="3"
                    placeholder="Summarize the session outcome"
                  />
                </div>
              </div>
              <div className="design-card">
                <h3>Cards</h3>
                <div className="stack">
                  <div className="message-card">
                    <div className="message-header">
                      <span>Nova Analyst</span>
                      <span className="time">09:41</span>
                    </div>
                    <p>
                      Designing the cadence around trust builds a more durable
                      insight loop.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
      </main>

      {showSelectModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal">
            <div className="modal-header">
              <div>
                <p className="eyebrow">Synthetic directory</p>
                <h2>Select a synthetic user</h2>
              </div>
              <button
                className="icon-button"
                type="button"
                onClick={() => setShowSelectModal(false)}
              >
                Close
              </button>
            </div>
            <div className="modal-content">
              <div className="stack">
                {userOptions.map((user) => (
                  <div key={user.id} className="user-option">
                    <div className="avatar">{user.name[0]}</div>
                    <div className="user-meta">
                      <div className="user-row">
                        <h4>{user.name}</h4>
                        <span className="tag">{user.tag}</span>
                      </div>
                      <p className="subtle">{user.description}</p>
                      <span
                        className={`emotion-chip ${user.emotionColor}`}
                        style={{
                          background: emotionPalette[user.emotionColor],
                        }}
                      >
                        {user.emotion}
                      </span>
                    </div>
                    <button className="button ghost" type="button">
                      Select
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {showProfileModal && (
        <div className="modal-overlay" role="dialog" aria-modal="true">
          <div className="modal large">
            <div className="modal-header">
              <div>
                <p className="eyebrow">Synthetic profile</p>
                <h2>{profile.name}</h2>
              </div>
              <button
                className="icon-button"
                type="button"
                onClick={() => setShowProfileModal(false)}
              >
                Close
              </button>
            </div>
            <div className="profile-grid">
              <div className="profile-summary">
                <div className="profile-header">
                  <div className="avatar xl">N</div>
                  <div>
                    <h3>{profile.title}</h3>
                    <p className="subtle">{profile.location}</p>
                  </div>
                </div>
                <p className="subtle">{profile.summary}</p>
                <div className="chip-row">
                  {profile.traits.map((trait) => (
                    <span key={trait} className="tag">
                      {trait}
                    </span>
                  ))}
                </div>
              </div>
              <div className="profile-details">
                <h3>Highlights</h3>
                <ul>
                  {profile.highlights.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <div className="profile-actions">
                  <button className="button primary" type="button">
                    Start session
                  </button>
                  <button className="button secondary" type="button">
                    Export profile
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
