import styles from "@/app/ui/dashboard/products/singleProduct/singleProduct.module.css";

const SingleProductPage = async () => {

    return (
        <div className={styles.container}>
            <div className={styles.infoContainer}>
                <div className={styles.imgContainer}>
                    <img src="/noavatar.png" alt="" />
                </div>
                Iphone
            </div>
            <div className={styles.formContainer}>
                <form action="" className={styles.form}>
                <label>Title</label>
                <input type="text" name="title" placeholder="username" />
                <label>Price</label>
                <input type="number" name="price" placeholder="Ksh" />
                <label>Stock No.</label>
                <input type="number" name="stock" />
                <label>Color</label>
                <input
                type="text"
                name="color"
                placeholder="color"
                />
                <label>Size</label>
                <textarea type="text" name="size" placeholder="size" />
                <label>Category</label>
                <select name="cat" id="cat">
                <option value={true} >Yes</option>
                <option value={false} >No</option>
                </select>
                <label>Description</label>
                <textarea name="desc" id="desc" rows="10" placeholder="description"></textarea>
                <button>Update</button>
                </form>
            </div>
        </div>
    )
}

export default SingleProductPage;