import "lazysizes"
require("prismjs/themes/prism-tomorrow.css")

export const onServiceWorkerUpdateFound = () => {
  const showNotification = () => {
    Notification.requestPermission(result => {
      if (result === "granted") {
        navigator.serviceWorker.ready
          .then(registration => {
            registration.showNotification("Update", {
              body: "Novo conteudo Disponivel!",
              icon: "./src/images/gatsby-icon.png",
              vibrate: [200, 100, 200, 100, 200, 100, 400],
              tag: "request",
              actions: [
                // you can customize these actions as you like
                {
                  action: () => {
                    window.location.reload()
                  }, // you should define this
                  title: "update",
                },
                {
                  action: () => {}, // you should define this
                  title: "ignore",
                },
              ],
            })
          })
          .catch(err => {
            throw new Error(err)
          })
      }
    })
  }

  showNotification()
}
