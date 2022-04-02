<template>
  <div class="data-table my-5">
    <div class="user-table">
      <div class="container-xl">
        <div class="table-responsive">
          <div class="table-wrapper">
            <div class="table-title">
              <div class="row">
                <div class="col-sm-6">
                  <h2>Manage <b>Comments</b></h2>
                </div>
                <div class="col-sm-6">
                  <button
                    type="button"
                    class="btn btn-create"
                    data-bs-toggle="modal"
                    data-bs-target="#addComment"
                    @click="addCommentPopup()"
                  >
                    Add New Comment
                  </button>
                  <vue-excel-xlsx
                    class="btn btn-excel"
                    :data="comments"
                    :columns="columns"
                    :file-name="'filename'"
                    :file-type="'xlsx'"
                    :sheet-name="'sheetname'"
                  >
                    Download
                  </vue-excel-xlsx>
                  <button class="btn btn-pdf" @click="prientPDF">
                    Download PDf
                  </button>
                </div>
              </div>
            </div>

            <div id="table_id">
              <table class="table table-striped table-hover">
                <thead>
                  <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Body</th>
                    <th id="actionsCul">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="comment in comments" :key="comment.id">
                    <td>{{ comment.id }}</td>
                    <td>{{ comment.name }}</td>
                    <td>{{ comment.email }}</td>
                    <td>{{ comment.body }}</td>
                    <td class="editBtn">
                      <button
                        type="button"
                        class="btn btn-warning"
                        data-bs-toggle="modal"
                        data-bs-target="#my-modal-edit"
                        @click="editCommitPopup(comment.id)"
                      >
                        Edit
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Add Modal Create Model -->
  <div
    class="modal fade"
    id="addComment"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Add New Comment</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Name</label>
            <input type="text" class="form-control" required v-model="name" />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input type="email" class="form-control" required v-model="email" />
          </div>
          <div class="form-group">
            <label>body</label>
            <textarea
              type="text"
              class="form-control"
              required
              v-model="body"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-success" @click="addComment()">Add</button>
        </div>
      </div>
    </div>
  </div>
  <!-- Add Modal Edit Model -->
  <div
    class="modal fade"
    id="my-modal-edit"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Edit Comment</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <div class="form-group">
            <label>Name</label>
            <input
              type="text"
              class="form-control"
              required
              v-model="commentToEdit.name"
            />
          </div>

          <div class="form-group">
            <label>Email</label>
            <input
              type="email"
              class="form-control"
              required
              v-model="commentToEdit.email"
            />
          </div>
          <div class="form-group">
            <label>Body</label>
            <textarea
              type="text"
              class="form-control"
              required
              v-model="commentToEdit.body"
            />
          </div>
        </div>
        <div class="modal-footer">
          <button class="btn btn-info" @click="edituser(commentToEdit.id)">
            Save
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "dataTable",
  data() {
    return {
      name: "",
      email: "",
      body: "",
      commentToEdit: {},
      userToAdd: {},
      comments: [],
    };
  },

  //fetch data from API
  mounted() {
    fetch("https://jsonplaceholder.typicode.com/comments")
      .then((res) => res.json())
      .then((response) => {
        this.comments = response;
      })
      .catch((error) => {
        this.comments = error;
      });
  },
  methods: {
    //PDF
    prientPDF() {
      let oldHtml = Object.assign(document.body.innerHTML, {});
      let actionsCul = document.getElementById("actionsCul");
      actionsCul.style.display = "none";

      let btnEdit = document.querySelectorAll(".editBtn");
      for (let i = 0; i < btnEdit.length; i++) {
        btnEdit[i].style.display = "none";
      }
      let printContents = document.getElementById("table_id").innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = oldHtml;
    },
    // Add User
    addCommentPopup() {},
    addComment() {
      let lastId = this.comments.length + 1;
      var newRow = {
        id: lastId++,
        name: this.name,
        email: this.email,
        body: this.body,
      };
      this.comments.push(newRow);
      this.name = "";
      this.email = "";
      this.body = "";
      this.$bvModal.hide("my-modal");
    },
    //Edit User
    editCommitPopup(commentId) {
      this.comments.forEach((comment) => {
        if (comment.id == commentId) {
          this.commentToEdit = Object.assign({}, comment);
        }
      }),
        this.$bvModal.show("my-modal-edit");
    },

    edituser(commentId) {
      this.comments = this.comments.map((comment) => {
        if (comment.id == commentId) {
          comment = this.commentToEdit;
        }
        return comment;
      });
      this.$bvModal.hide("my-modal-edit");
    },
    // alert to download Excel
    startDownload() {
      alert(" Loading Download Excel");
    },
  },
};
</script>
<style>
.btn {
  color: #eee;
  border-radius: 10px;
}
.btn-excel {
  background-color: rgb(10, 168, 63);
}
.btn-create {
  background-color: rgb(59, 117, 5);
}
.btn-pdf {
  background-color: rgb(136, 53, 15);
}
</style>
