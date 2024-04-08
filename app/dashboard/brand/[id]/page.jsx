import styles from "@/app/ui/dashboard/users/singleUser/singleUser.module.css";

const BrandPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noavatar.png" alt="" />
                </div>
                Brand Name
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Brand Name</label>
                <input type="text" name="name" placeholder="name" />
                <label>Brand Description</label>
                <textarea type="text" name="description" placeholder="description" />                
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default BrandPage;