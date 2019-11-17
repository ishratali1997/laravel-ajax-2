<!-- Modal -->
<div class="modal fade" id="insert-modal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
    aria-hidden="true">
    <div class="modal-dialog" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Add new student</h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <form method="post" id="form-insert">
                @csrf
                <div class="modal-body">
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="Last Name" name="fname" id="fname">
                    </div>
                    <div class="form-group">
                        <input type="text" class="form-control" placeholder="First Name" name="lname" id="lname">
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                    <button type="submit" class="btn btn-primary">Add</button>
                </div>
            </form>
        </div>
    </div>
</div>