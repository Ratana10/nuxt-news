<script setup>
const { data } = await useFetch("/api/technologies");
</script>

<template>
   <div class="container">
      <div class="row">
         <div class="row mt-4">
            <h1 class="fw-bold">Technology</h1>
         </div>
         <div class="row mt-2 row-md-2">
            <div class="col-9">
               <div class="card">
                  <img
                     src="/technology/t0.jpg"
                     alt=""
                     style="height: 530px; width: 950"
                  />
               </div>
            </div>
            <div class="col-3">
               <p style="font-size: 18px; text-align: justify">
                  សូមជម្រាប​ថា
                  ក្រុមហ៊ុននេះ​បានធ្វើការសាកល្បង​ដោយជោគជ័យ​នូវប្រព័ន្ធសាកភ្លើង​ឥតខ្សែតាមផ្លូវដោយជោគជ័យ​
                  ដោយបាន​សហការ​ជាមួយ Toyota។ រថយន្ត​ដែល​ត្រូវ​បាន​ធ្វើតេស្ត​នោះ
                  គឺជា Toyota RAV4 Plug-in Hybrid។ អាគុយ​របស់វា​ អាច​សាក​ឥតខ្សែ
                  នៅតាមផ្លូវ​ដែលគេបានរៀបចំដំឡើង​បច្ចេកវិទ្យានេះ (Charging Path)។
                  ការសាក​ភ្លើងសរុប​របស់​រថយន្ត​នេះ គឺមាន​ទំហំ
                  ២៤១,៦៩គីឡូវ៉ាត់​ម៉ោង ជាមួយនឹងចម្ងាយ​បើកបរដោយប្រើអគ្គិសនីសុទ្ធ
                  ១៩៥០គីឡូម៉ែត្រ ដោយវារត់ជាប់រយៈពេល ១០០ម៉ោង។
                  ចំពោះការបើកបរសាកល្បង​នេះ គឺ​មានតៃកុងឆ្លាស់គ្នា​បើកចំនួន
                  ៥៥នាក់។ ប្រសិន​បើរថយន្តខាងលើ មិនសាកភ្លើង​ឥតខ្សែតាមផ្លូវនេះទេ
                  គឺ​វាអាចបើកបរបានចម្ងាយត្រឹមតែ ៧៥គីឡូម៉ែត្រ​តែប៉ុណ្ណោះ
                  នៅពេលសាកពេញ ព្រោះតែអាគុយមានទំហំតូចត្រឹមតែ ១៨គីឡូវ៉ាត់ម៉ោង៕
               </p>
            </div>
         </div>
      </div>
      <div class="row mt-4">
         <div class="row">
            <h1 class="fw-bold">Latest News</h1>
            <NuxtLink to="/slug"> Detail </NuxtLink>
         </div>
         <div class="row mt-3">
            <div
               class="col mt-4"
               v-for="technology in data.data"
               :key="technology.id"
            >
               <div class="card zoom" style="height: 310px; width: 290px">
                  <img
                     class="card-img-top"
                     :src="technology.image"
                     alt="Card image cap"
                     style="height: 165px"
                  />
                  <div class="card-body">
                     <p class="card-text">{{ technology.title }}</p>
                  </div>
                  <div class="card-footer text-muted p-1">
                     <NuxtLink :to="`/technology/${technology.id}`">
                     <div>
                        <p class="small">
                           {{ technology.createdAt }}
                        </p>
                     </div>
                  </NuxtLink>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
</template>