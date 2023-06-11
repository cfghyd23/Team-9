import Rect from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
    <form>
    <div class="mb-3">
      <label for="name" class="form-label">Name</label>
      <input type="text" class="form-control" id="name"/>
    </div>
    <div class="mb-3">
      <label for="location" class="form-label">Location</label>
      <input type="text" class="form-control" id="location"/>
    </div>
    <div class="mb-3">
      <label for="address" class="form-label">Address</label>
      <input type="text" class="form-control" id="address"/>
    </div>
    <div class="mb-3">
      <label for="city" class="form-label">City</label>
      <input type="text" class="form-control" id="city"/>
    </div>
    <div class="mb-3">
      <label for="state" class="form-label">State</label>
      <input type="text" class="form-control" id="state"/>
    </div>
    <div class="mb-3">
      <label for="zip" class="form-label">Zip Code</label>
      <input type="text" class="form-control" id="zip"/>
    </div>
    <div class="mb-3">
      <label for="phone" class="form-label">Mobile No.</label>
      <input type="number" class="form-control" id="phone"/>
    </div>
    <div class="mb-3">
      <label for="email" class="form-label">Email address</label>
      <input type="email" class="form-control" id="email" aria-describedby="emailHelp"/>
    </div>
    <div class="mb-3">
    <label for="storage" class="form-label">Storage Capacity</label>
    <input type="number" class="form-control" id="storage"/>
  </div>
  <div class="mb-3">
      <label for="abP" class="form-label">AB+ Count</label>
      <input type="number" class="form-control" id="abP"/>
    </div>
    <div class="mb-3">
      <label for="abN" class="form-label">AB- Count</label>
      <input type="number" class="form-control" id="abN"/>
    </div>
    <div class="mb-3">
      <label for="oP" class="form-label">O+ Count</label>
      <input type="number" class="form-control" id="oP"/>
    </div>
    <div class="mb-3">
      <label for="oN" class="form-label">O- Count</label>
      <input type="number" class="form-control" id="oN"/>
    </div>
    <button type="submit" class="btn btn-primary">Submit</button>
  </form>
    </div>
  );
}

export default App;
