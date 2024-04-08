import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

const SingleUserPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noavatar.png" alt="" />
                </div>
                Iphone 13 Pro
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Order By</label>
                <input type="text" name="name" placeholder="name" />
                <label>Product Name</label>
                <input type="text" name="productname" placeholder="productname" />
                <label>Product Category</label>
                <input type="text" name="category" placeholder="category" />
                <label>Price</label>
                <input type="text" name="price" />
                <label>Product Description</label>
                <textarea type="text" name="description" placeholder="description" />
                <label>In Stock?</label>
                <select name="isAdmin" id="isAdmin">
                <option value={true} >Yes</option>
                <option value={false} >No</option>
                </select>
                
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleUserPage;