import styles from "./sidebar.module.css";
import MenuLink from "./menuLink/menuLink";
import {
    MdDashboard,
    MdSupervisedUserCircle,
    MdShoppingBag,
    MdAttachMoney,
    MdWork,
    MdAnalytics,
    MdPeople,
    MdOutlineSettings,
    MdHelpCenter,
    MdLogout,
  } from "react-icons/md";

const menuItems = [
    {
      title: "Pages",
      list: [
        {
          title: "Dashboard",
          path: "/dashboard",
          icon: <MdDashboard />,
        },
        {
          title: "Users",
          path: "/dashboard/users",
          icon: <MdSupervisedUserCircle />,
        },
        {
          title: "Products",
          path: "/dashboard/products",
          icon: <MdShoppingBag />,
        },
        {
          title: "Orders",
          path: "/dashboard/orders",
          icon: <MdShoppingBag />,
        },
      ],
    },
    {
      title: "Catalog",
      list: [
        {
          title: "Brands",
          path: "/dashboard/brand",
          icon: <MdWork />,
        },
        {
          title: "Category",
          path: "/dashboard/category",
          icon: <MdPeople />,
        },
        {
          title: "Color",
          path: "/dashboard/color",
          icon: <MdAnalytics />,
        },
      ],
    },
    {
      title: "Blogs",
      list: [
        {
          title: "Blog",
          path: "/dashboard/blog",
          icon: <MdOutlineSettings />,
        },
        {
          title: "Blog Category",
          path: "/dashboard/blogCategory",
          icon: <MdHelpCenter />,
        },
        {
          title: "Enquiries",
          path: "/dashboard/enquiries",
          icon: <MdHelpCenter />,
        },
      ],
    },
  ];
const Sidebar = () => {
    return (
        <div className={styles.container}>
            <div className={styles.user}>
                <img className={styles.userImage} src="/noavatar.png" alt="" width="50" height="50" />
                <div className={styles.userDetail}>
          <span className={styles.username}>Jack Kinyua</span>
          <span className={styles.userTitle}>Administrator</span>
        </div>
            </div>
            <ul className={styles.list}>
                {menuItems.map((cat) => (
                    <li key={cat.title}>
                        <span className={styles.cat}>{cat.title}</span>
                        {cat.list.map((item) => (
                            <MenuLink item={item} key={item.title} />
                        ))}
                    </li>
                ))}
            </ul>
            <form
           action={async () => {
          "use server";
          await signOut();
        }}
      >
        <button className={styles.logout}>
          <MdLogout />
          Logout
        </button>
      </form>
        </div>
    )
}

export default Sidebar