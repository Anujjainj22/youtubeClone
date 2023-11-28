import React from "react";
import { useSelector } from "react-redux";
const Sidenav = () => {
  const items = [
    {
      logo: "https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15252.png",
      title: "Home",
    },
    {
      logo: "https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15252.png",
      title: "Shorts",
    },
    {
      logo: "https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15252.png",
      title: "Subscriptions",
    },
    {
      logo: "https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15252.png",
      title: "Music",
    },
    {
      logo: "https://www.iconpacks.net/icons/5/free-icon-youtube-shorts-logo-15252.png",
      title: "News",
    },
  ];

  const store = useSelector(data=> data.ytSlice.toggleButton)
  return (
    store?"":
    <div className="p-2 mt-16 ml-2 fixed bg-slate-50 h-full shadow-md text-xs">
      <ul className="w-48">
        {items.map((item) => {
          return (
            <li className="py-3 flex" key={item.title}>
                <img  className="mr-2 h-5 w-5" src={item.logo} alt="logo" />
              {item.title}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Sidenav;
