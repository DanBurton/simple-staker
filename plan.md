# plan

## App web views

### ConnectAccount

* tell the user to accept the MyAlgoWallet pop up

### RoleSelect

* Buttons:
  * Deployer (-> Deploy)
  * Staker (-> ApplicationSelect)

## Deployer web views

### Deploy

* Fields
  * opts
* Buttons
  * Deploy (-> Deployed)

### [x] Deployed

* info:
  * the application ID
* maybe store app id in browser storage for later retrieval on another web view?

## Staker web views

### ApplicationSelect

* fields:
  * application ID
* Buttons:
  * go (-> ApplicationInfo)

### ApplicationInfo

* info: (from a Reach view)
  * which tokens
  * how much is currently staked
  * rewards per block
  * when the reward period is over
* maybe store in browser storage for later retrieval?

* Buttons
  * Stake (-> Stake)
  * Harvest (-> Harvested)
  * Withdraw (-> Withdraw)

### Stake

* Info (remember from ApplicationInfo?)
  * application ID
  * what is the stake token
* Fields
  * Amount
* Buttons
  * Stake (-> Staked)
* enter amount to withdraw, click button to withdraw

### Staked

* Info
  * txn id or something to confirm?
* Buttons
  * Back (-> ApplicationInfo)

### Harvest

* Info
  * application ID
  * what is the reward token
  * (would be nice to present an estimated harvest but discovering it is tricky)
* Buttons
  * Harvest (-> Harvested)

### Harvested

* Info
  * application ID
  * what is the reward token
* Buttons
  * Back (-> ApplicationInfo)

## Bonus? Observer views

* enter application ID
* see all stakers for that app, and entire staking history
  * how? observer is a participant and reruns all history