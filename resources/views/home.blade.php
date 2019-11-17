@extends('layouts.app')
@include('student.add')
@include('student.update')
@section('content')
<div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
                <div class="card-header">
                    <!-- Button trigger modal -->
                    <button type="button" class="btn btn-primary add-btn" data-toggle="modal"
                        data-target="#insert-modal">
                        Add
                    </button>
                    <br></div>

                <div class="card-body">
                    @if (session('status'))
                    <div class="alert alert-success" role="alert">
                        {{ session('status') }}
                    </div>
                    @endif

                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">#</th>
                                <th scope="col">First</th>
                                <th scope="col">Last</th>
                                <th scope="col">Action</th>
                            </tr>
                        </thead>
                        <tbody id="studentinfo">

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </div>
</div>
@endsection