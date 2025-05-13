import chefClaudeLogo from "/src/assets/chef-claude-icon.png"

export default function Header() {
    return (
        <div className="logo-container">
            <header>
                <img src={chefClaudeLogo} className="logo" alt="logo" />
                <h1 className="logo-text">Chef Claude</h1>
            </header>
        </div>
    )
}