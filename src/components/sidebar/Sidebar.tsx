import "./sidebar.css";

export const Sidebar = () => {
  return (
    <aside className="sidebar">
      <SidebarItem title="All Protiens" />
    </aside>
  );
};

interface ISidebarProps {
  title: string;
}

const SidebarItem: React.FC<ISidebarProps> = ({ title }) => {
  return (
    <div className="sidebar__item">
      <h4>{title}</h4>
    </div>
  );
};
