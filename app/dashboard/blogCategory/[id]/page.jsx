import styles from "@/app/ui/dashboard/blogCategory/singleblogCategory/singleblogCategory.module.css";

const SingleblogCategoryPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="name" />
                <label>Category</label>
                <select name="cat" id="cat">
                <option value="general">Choose a Category</option>
                <option value="kitchen">Kitchen</option>
                <option value="phone">Phone</option>
                <option value="computer">Computer</option>
                </select>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleblogCategoryPage;