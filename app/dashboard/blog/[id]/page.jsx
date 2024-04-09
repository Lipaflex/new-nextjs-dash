import styles from "@/app/ui/dashboard/blog/singleBlog/singleBlog.module.css";

const SingleBlogPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noavatar.png" alt="" />
                </div>
                Blog Name
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="name" />
                <label>Created Date</label>
                <input type="text" name="title" placeholder="date" />
                <label>Category</label>
                <select name="cat" id="cat">
                <option value="general">Choose a Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                </select>
                <label>Description</label>
                <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleBlogPage;