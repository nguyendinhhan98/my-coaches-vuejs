<template>
  <form @submit.prevent="register">
    <div class="form-control">
      <label for="firstname" :class="errorFirstName ? 'errorWord' : ''"
        >Firstname</label
      >
      <input
        type="text"
        id="firstName"
        v-model="firstName"
        @blur="checkFirstName"
        :class="errorFirstName ? 'errorBorder' : ''"
      />
      <p v-if="errorFirstName">
        {{ messErrorFirstName }}
      </p>
    </div>
    <div class="form-control">
      <label for="lastname" :class="errorLastName ? 'errorWord' : ''"
        >Lastname</label
      >
      <input
        type="text"
        id="lastName"
        v-model="lastName"
        @blur="checkLastName"
        :class="errorLastName ? 'errorBorder' : ''"
      />
      <p v-if="errorLastName">
        {{ messErrorLastName }}
      </p>
    </div>
    <div class="form-control">
      <label for="description" :class="errorDescription ? 'errorWord' : ''"
        >Description</label
      >
      <textarea
        id="description"
        rows="5"
        v-model="description"
        @blur="checkDescription"
        :class="errorDescription ? 'errorBorder' : ''"
      ></textarea>
      <p v-if="errorDescription">
        {{ messErrorDescription }}
      </p>
    </div>
    <div class="form-control">
      <label for="rate" :class="errorHourlyRate ? 'errorWord' : ''"
        >Hourly Rate</label
      >
      <input
        type="number"
        id="rate"
        v-model="hourlyRate"
        @blur="checkHourlyRate"
        :class="errorHourlyRate ? 'errorBorder' : ''"
      />
      <p v-if="errorHourlyRate">
        {{ messErrorHourlyRate }}
      </p>
    </div>
    <div class="form-control">
      <h3>Areas of Expertise</h3>
      <div class="card__option">
        <input
          type="checkbox"
          class="card__option-item"
          value="frontend"
          v-model="areas"
          @blur="checkAreas"
        />
        <label for="frontend" :class="errorAreas ? 'errorWord' : ''"
          >Frontend Development</label
        >
      </div>
      <div class="card__option">
        <input
          type="checkbox"
          class="card__option-item"
          value="backend"
          v-model="areas"
          @blur="checkAreas"
        />
        <label for="backend" :class="errorAreas ? 'errorWord' : ''"
          >Backend Development</label
        >
      </div>
      <div class="card__option">
        <input
          type="checkbox"
          class="card__option-item"
          value="fullstack"
          v-model="areas"
          @blur="checkAreas"
        />
        <label for="fullstack" :class="errorAreas ? 'errorWord' : ''"
          >Fullstack Development</label
        >
      </div>
      <p v-if="errorAreas">{{ messErrorAreas }}</p>
      <p v-if="errorGeneral">Please fix the above errors and submit again.</p>
    </div>
    <my-button>Register</my-button>
  </form>
</template>

<script>
import MyButton from "../common/MyButton";
import axios from "axios";

export default {
  name: "CoachesRegisterForm",
  components: { MyButton },
  data() {
    return {
      firstName: "",
      lastName: "",
      description: "",
      hourlyRate: null,
      areas: [],
      errorFirstName: false,
      messErrorFirstName: "",
      errorLastName: false,
      messErrorLastName: "",
      errorDescription: false,
      messErrorDescription: "",
      errorHourlyRate: false,
      messErrorHourlyRate: "",
      errorAreas: false,
      messErrorAreas: "",
      errorGeneral: false,
    };
  },
  methods: {
    register() {
      this.checkFirstName();
      this.checkLastName();
      this.checkDescription();
      this.checkHourlyRate();
      this.checkAreas();
      if (
        !this.errorFirstName &&
        !this.errorLastName &&
        !this.errorDescription &&
        !this.errorHourlyRate &&
        !this.errorAreas
      ) {
        axios
          .post("https://my-coaches-default-rtdb.firebaseio.com/coaches.json", {
            id: localStorage.getItem("userID"),
            areas: this.areas,
            description: this.description,
            firstName: this.firstName,
            lastName: this.lastName,
            hourlyRate: this.hourlyRate,
          })
          .catch((error) => console.log(error));
        this.$store.commit("SET_IS_REGISTER", true);
        this.$router.push({ name: "Coaches" });
        this.$store.dispatch("getCoaches");
      } else {
        this.errorGeneral = true;
      }
    },
    checkFirstName() {
      if (this.firstName == "") {
        this.errorFirstName = true;
        this.messErrorFirstName = "Firstname must not be empty.";
      } else {
        let firstCharactersAscii = this.firstName.split("")[0].charCodeAt(0);
        if (firstCharactersAscii >= 97 && firstCharactersAscii <= 122) {
          this.errorFirstName = true;
          this.messErrorFirstName =
            "firstname must capitalize the first letter.";
        } else {
          this.errorFirstName = false;
        }
      }
    },
    checkLastName() {
      if (this.lastName == "") {
        this.errorLastName = true;
        this.messErrorLastName = "Lastname must not be empty.";
      } else {
        if (this.lastName.length <= 3) {
          this.errorLastName = true;
          this.messErrorLastName = "lastName must be over 3 characters";
        } else {
          this.errorLastName = false;
        }
      }
    },
    checkDescription() {
      if (this.description == "") {
        this.errorDescription = true;
        this.messErrorDescription = "Description must not be empty.";
      } else {
        if (this.description.length >= 100) {
          this.errorDescription = true;
          this.messErrorDescription =
            "The description must be less than 100 characters long";
        } else {
          this.errorDescription = false;
        }
      }
    },
    checkHourlyRate() {
      if (this.hourlyRate <= 0) {
        this.errorHourlyRate = true;
        this.messErrorHourlyRate = "Rate must be greater than 0.";
      } else {
        this.errorHourlyRate = false;
      }
    },
    checkAreas() {
      if (this.areas.length == 0) {
        this.errorAreas = true;
        this.messErrorAreas = "At least one expertise must be selected.";
      } else {
        this.errorAreas = false;
      }
    },
  },
};
</script>

<style scoped>
form {
  display: block;
  margin-top: 0em;
}

.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: 700;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.card__option {
  margin-right: 1rem;
}
.card__option > input + label {
  vertical-align: middle;
}

.card__option > input {
  display: inline;
  width: auto;
  border: none;
}

.card__option > label {
  font-weight: 400;
  display: inline;
  margin: 0 0 0 0.5rem;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}

.errorBorder {
  border: 1px solid red;
}

.errorWord {
  color: red;
}
</style>
