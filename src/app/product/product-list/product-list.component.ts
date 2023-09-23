import { Component } from '@angular/core';
import { Iproducto } from '../iproducto';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {

  imageWidth:number=50;
  imageMargin:number=2;
  muestraImg:boolean=true;
  listFilter:string='';

  showImage():void{
    this.muestraImg=!this.muestraImg;
  }

  productos:Iproducto[]=[
    {
      "productoId":1,
      "Modelo":"Sentra",
      "Descripcion":"4 puertas familiar",
      "year":"febrero 3 2020",
      "precio": 120000,
      "Marca":"NISSAN",
      "Color":"Verde",
      "imageUrl":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBISEhgSERIZGBgYGBgSGBkYGhwYGhgYGBgZGRgZGhkcIS4lHB4rIRgYJjomKy8xNTU1GiQ7QDs0Py40NjEBDAwMEA8QHhISHzYrJSs0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDQxNDQ0MTQ0MTQ0NDQ0NDQ0MTQ0NDQ0NDQ0NP/AABEIALUBFgMBIgACEQEDEQH/xAAcAAABBQEBAQAAAAAAAAAAAAAAAQMEBQYHAgj/xABCEAACAQIDBAgDBAcIAgMAAAABAgADEQQSIQUxQVEGEyIyYXGBoUKRsQcUUsEVI2JygpLRFjNDorLC4fDS4jRT8f/EABkBAQEBAQEBAAAAAAAAAAAAAAABAgMEBf/EACQRAAICAgICAgMBAQAAAAAAAAABAhEDEiExBEETUSIyYRRC/9oADAMBAAIRAxEAPwDssIQgBFiRYAQhCAEIQgBCEIAQhCAEIQgBCEIAQhCAEIQgBCNVKqqLk+XMnkBxM8ozHethwudTzuOHz+UAfhCEASEIQAhFiQAhCEAIQhAFiQhACEDCAEIQgBFiRYAQhCAEIQgBCEIAQhCAEIQgBEgTIdTaFJfjBPJe19N0jkl2CZCVTbZQblPqQPzMr6nSdSxSkFZgbMc5yJ4M2W2b9kXPlvmPlh9ktGiZwouSABxOkZzs3dFh+Jh9F/M+8pjtincFmBYeFwD+yA2nnvns9IKfBh/L/wC0y88PsmyLmnRC67zxJ1P/AB5CPShG3l/GP5f/AGgdvIP8RfUH/wApP9EPsbIv4SgHSFPxqfIN+V4N0gXgFP8AOP8AZL88PsbIvoTPf2kUb0Hox/3KJIobepPpdQeRYf0tCzQfsbIuYSsq7ZooLuxXxINvQ7oUduYV+7WT5ib+SP2W0WcI3TqBhdSCOYN45Np2UIQhAFiQhAFhEhAFhEiwBIsSLACEIQAhCEAIQhACESQsftBKIBYkltEVRdnPJR+e4byQIBLJtqZm9rdKlpg9QA9t9Rjlpj90jVz+7p4iUm39ts5y1Nbmy0UN18M5H94fDujkd8oKmEqVTnxDacKan6kfQTN2ZbG8Z0px1ZyKbI45ZGCj0z2+ciVdr7VAJtQsBfdb/fLYUwoCqAAOA0EoukeyK9e3VMMoU3QsVzG9/I8N8y8cX2iUiFtDpBjurYVaSBHGXMpZdG5MCbSPguk1RFWmmGuAAihahPgBYrrKnaS16b9RXqElbNlzZgLjT2k/olhTUrlraIpb1PZX8z6SPBBqqGqLU9JiulTDVk/hBH1Edo9JcO5t1jKeTIw+gInvauLdanV0wLjVmIva+thw3SXsTZgxBXFYlQETuWFi7E6EDjwAHrPPk8fFFWZcUWWDwlSoM7tkQaFjvJ5ADefARvaO28Hg9HIz8mHWVD/ADlT+I+kXaWPeq2SmcirdSV3IOKUzz/E/mB4ck2gmXEVFuSFdhckk7+JOpmcPipq5CMTbY37R2valQa3N3yf5aYA95T4vpziydUpCxB7jMfm7GZxaZYiwnrGUSN41sR6jX+s9SwwXo2oo3uwsdi8XS61cRSQhihXqFNiPG43ggyc/6RXjh6g5ZWpk/I2mc+zbEWqVKBPeUVF81Nm9mHynQ+qleGH0iNIzX9omom2Kw70b6Z0OZNdB2ksfYyxV6dZM9NwwPxLlPvb23x/a+z+toPT4shA8GtdT8wJmPub06aYzCdnOiu6HVbkahhyvccxPPk8VPmPDMuKN30bbq66GmxyswRgCQBfTtLe3lOjCcb2VtAVUFWn2WXR0PA8QeY5GdQ2DtJcRSDA6jssOII5zPiycW4S7LB1wy1hCE9x0FiQhACEIQBYQiQAixIsAIQhACESITAFheQcXtSjSBZ23cgWOnlOZbQ+0qtjqy4PZalMxs9dwCyr8TIm5bDi2t7aCZ2T6B0Lae2AjdTRAesRmIJ7NNfx1CNw5De3DiRksfjXLslJi9Rh26jaachbuqOCj3OsjY3aWGwlHqKTsTvd3JZ3e2ru51Zpl8L0kp0w50Z3YW7QAygaX47yZTLNRRwy092rHex3nwHIQrsqIXqMFVdSzGwA85icZ0gxFTuvkHJNP82+Vz4ys1g9R3AYOA5LrmU3BKtcGKIb7AbSwtdslKujNyvYnyB3+ktPuwUFm0AFyeQG8zm21Nr18SAKgpi1iCtMBgRybUj0MZrbQxlRclSvUK2ykZzYi1tQN+nOBRWYqua9WpW/G5YeCk9kei2HpNt9n6U6dOqajqrM6gX3kBTuHmxlBgNmFraeM1OAwB0pU+8e834FP+48BJKSirYbFTZgxOIex/VhyXb8XEIPDn8uOnjpP0jSgERBfS6Ipylae4vfgzaheQvLTamJpYSgU3Ii5n5trZUvxLNp85z9OjmOx7HF5Oy7EhmJAIGllFico3ek8cZLJLaXSMrnljlTpk1rU8OigCwuxNhw0AEzAVqjtUbezFz4km5t4TQ4roZjEDMKWZQMxyncBv0NifSeNm7JZgD8p7ISjJfizaaK6hhzyk7bGE/VLUtyB+dvofaarA9Gmbh7Sw23sArga1x3abuPNVzD6TQs5zspalKotSmxRhoGGtg2h05TaYXbeMGjZH80IPtYSFsvZgemj/jpBx5jLb/UZfUK66GlhKz+JUIvzcj6TMpRXbIxintHGE3JTyyC0r8Nth6KNR6tCFd999zsXtbl2rS9ZMXU7tOjT/edqh+SAD3kQ9GSxLVa7XOpCKqDTTe2YzjLyMcfZNkUOxMYKWIUnRXIpty13H0NjOi7MxBwtYP8AA5yuOXAGZpOj2EpkN1Zdgbgu7vqONr29pPrCpU0Nz4TxZs0XNSj2jDlbtHU6bhhcG4McnMmxGPoI1SkwUqM5D918nBr8xpcazoezsWtaklVdzorjyYA/nPfhyrJGztF2rJUIsSdihaEIQBYRIsAIRIsAQmV+L2tRpEq1Rcw3qDcjz5esgbcxz5XWkbZBdyNDuvlB4eNtddCNZnMHs2piLMwCoBYX7K+JNtSTv0+YnLLNxjx2ZbouMV0oJv1KaDe7aKPUynrbTr1dxZ/mqDy4n2l2Nm4amoaoc5HdzaKPFUHCM1NoYdfhDcr90eSjT5zwzcn+0qMO/bKvDpUbvLnvpYa/8CM4noZg6+r4coxOYsjlCTzNt8tjtct3AAPAACMvj2O9r+X9ZzjNQ5TMppGbxv2b4UrZK9VOIObMfmeEz+L+zFr3TF3/AHkP1DflN82KYxA1Rt15v/TP0y7M5dW+zzFr3KtJvVlP+j840Ohu0V7rL6Vf/ITp9WvTQ2qV0U8sy3+thPSvTP8AdjP4g5h8x2frOn+nKu0NpHME6N7UHwofNkP0kujsTaNMXYUL34sST4WQToxoO3fYIOQ1P/fSCU6a91cx5mZflz/g3Zn9lbNrkfrERTzplm/1KAPeX1OgtJciDtbyRqQTvJPEyQCx0uFHhPaimm8zlPLKf7My3Zy/7R8UymnSJtmZ6jW1vkORB5aMfWeMJ05WnTp0lFUKiqgC5baDh2ptNtbJweLKvXRmZC6jKxW4Zs1jbzv6w2dg6FHs4fCog5kZm/ma5nX5cSgotXRrZVRndm/aGitlqUq1VN4XKtw3Mdoyw2bhsWy56dCnRRizp17ksqMxKgooFrC28zTItRuB9NPpJFPZtVtbW8T/AFkWel+EaIpfSKVcLiSLPjmA/DQpog/na7e88nYmHY3qK9U771qj1P8AKTYTRfo1B36g8gb/AElNtyoiDJRqGnYi7lC5YW3LplHmTfSYeTLLtkbY6iIgARAANLIoAAOmlvSSVo1G7tMnz1jGA2iwpXbtdmwZkVC37VgTaSq21Kh0DEeA0+k5uvbA8uzKp7xCDxIH1i/o+gvfrX8FuZVPiGO8xs1OZmd4r0LQ7jcWiVUFA0lUGz9dmLub2siqeyPE8/nbffeyMtNFbXUA/QyoR00JsSNxPDy5T1Uxyjjwl+T6FkfHVXc2Zib6a+Ok3HROi1PA4dGFitJF+QsPa055UxF2uOd50/ZWJFSkrDkB7T0+FL8mjpjfaJ0SLCfSOgkIsIAQhCAJG6tQKpYkAAEknQWHMxyZ/pDVL2p/ACGf9riE8uJ9Jic1FWyN0iio4sOuWoNAese3xuSbi/K9/SM4jHsTdRlUd1VJA8LgHdOZ7ZxWIO1E61nCtURFCsyrkLBcoA8+cnYfGbQp4isjVXelRqmlZurZrMTlN31NlykjUm/rPLPFPItkzDTlya2q9Sobs7Ennr9Y7SoldWs3hqvzOsyOyOkeKr4hsOtCmxVnzOGakqIhIZ3LBsq6X9t8lUOnmEDlHVgAxXOozowB7w3Nb+GeV+LlXasw4yNcM7b1IHIaj5DX2kyjhVyliwAGpJ0t53j2zHpOqutRWVgGUg3BBGhj642nVZ1FnakSAg3qQd9jvbiOFrS48KfZYw2ZT7R2nToAdhiSLqLXYj8VjYKvibeF5H2XV++IalUOtLN1YFIGo7trcmwsqC1rhb34yT0r27h8LQcVa5ps4dFFNQXY2YKAh3cLsSPeUH2Q7bU03pVHOcOXCtoAhVblSd+oa4nvxY4JWkddVF0auj0eooGH3ZWBU2ds4qWtqSTqDMr0MWpTfFU7kotRQhYENexJuDqDbJ8pply5nODdi63UO7vVQ3NzmZWsFB+G9z4Qw2EWmp1zM7Go7bsztvPgOAHAATHkzWupmT4G3BO+NNJT66CeeqUd9gJ81o4jCqx3STR2a7x/DVKN9XUed/6T3jto9nJS0XnxbxPh4TcYxq5M0kvY0mApU3YO43K1h2jftA+HwiOnE0E7tMnzNvYSjq4r9Z/D9D/zPDYqZlkUekRv6Lt9qN8AVfIfmZEq4t27zE+ZvKlsZGHxvjMvJJktls1TmYy9VZTvjfGMPjPGZqTIXNfFLlPkYw+KEpqmK0PlPJr+M1o2CzbFTwa8gK9571tI4JCyWa54TMbb6VCkTTogMw0Zj3VPIW7xElbex5o0DlNmc5FPLS7N6D6iZXAbOqVR+rCqpJUO5tmI3hdCWIvrYG093jePFraR0hG+WWOzOmThwMQqlDoSosw8bX7Q8J3XobXDUbBriwKkcV3gj+YT5x2zsirhmy1UytYNzVlPxKR7jeJ2n7GqzVMIpJ7gan8m7PyGk9LwxjJSiq9HTVJ2jpkSLEnc0EIsIAQhCAeTMHjsZTq1Wpir2gzXXje99x1PAaX3TeGcQ6TPTTFFK9lNQnKfhLbmXMN3anHLj3pWZkr4L3aGx0qlS4BZWDqdxDKQQbHylRtnYFSpiHxNNgruyvrlORlUKGTMAAbDebn5CXfR/ZdRsOrpiqinMwyvlrU7A6aOMw9GEk1sLjF/w6NTxRnot/I2Zf8ANPOseXF+rtGVGUejBbQ2Ni0w/wB0wtLIjENWZnXPWYa9pge7+zulJT6FYxt6oPNv6CbT+1eEuRVSpTIJBzIHAI03oT9JMw+1cHU/u8Unkxyn5NaSWbPH/kjlIjdEdg4nDoadWqpW91C3ut+8Lnhx+c2KbHp1LF7swFg4JVx4B1swHrK2irgZ0Icc1N/pCttiqg7KgTzfJ+W0uzO3Nsv8T0eovTyV8RWdPwu6P7shPvKGrs7Z1A5adFD4uS5+TEgeglJjdr4h9C58hpKt3e+pJM6S8iUlUeBKbZtm2sgXIh08JHGKvrmt9JkhUcb9I1itqikjMx0UX8zwE46zk+DN2aHa/SOnhkLOco3ADV3PJf8Ao8Zz/aHT7EOf1Kqi+PaP9B8pnsfi6mKqGo536AcAOCrGadNb2Os+ji8aMVcuWdoxS7L7D9NsUp7eVhxFrH0Imy2R0gXEJmUnTRlO9T/3jOZvh0YXQ68jHdh400K6ngTkYeBNvY2MZvGjKPCpiUU1wdQqYnt+h+ojT4iQs9yPI/URxcPUfuqTPm6JdnCz2+IjD1pOp7GqnVhYeMc/RtJP7yqo9RKtUQqGqGCqzbgTLbrcHT4lz4D+sRtuov8Ad0gPFj+Qm7fpCiGmzazAnKQLHfLFNiZReo4UfL6yBW25XqdlTa+lkXn5ayJW65jdyR4uwB+TG8ayfZaLt6mGp93tn2kGrjc5tYAeEqmCrq9RfS5+th7xl9qYdBcvf/vAC9/nNLDf9LTIu2l+8YinQU2JZKQP4S5BdvQZflNPszZjs3U4umUpYPEp1ThCFKHMAuYd4P2STz9ZgMM716pyi7v1mUeLIwUfQTpGwHahQFJ6zPVpBUqqWugaqw6umL/EoBM+lCOsVE9EVSKvpVgXbANUxKAVxWNZrEMURyqJTYgkCykG3MCdB+yjYdbB4ADEIUd3ZypIJC37O4213+s53VxK1cE1NaLpUxVelTAck3d6iEkX1sQnvO9U0yqAOAA+QtNUUciQhKAhFhACEIQDyZyb7SNgPiM601zVFfraYFrsrDtIBxPesONxOtSm25sjrwGRgrruJF1Yfhb+vCc8l8NeiO/RzL7PsTRfBijUq5KiVKgyFgjqGC3GQ8N4twtNelOopFqmYXBOa97X1AG7nrKPb2yEb/5+FvwFXX2rJrbwe/lKD9C16Xa2ftKog3hKv6xPIFQdP4JmOWL4fD/pFJGL23jU6ytT7QYVHXUCxs543lf1621NvOWu0+i+Nao7lFqM7M7FGQ3Zjc2UkMNTylaNh4u4X7rWzE7uqa3zI/4nZNGrNh9mBdsYerbsBGNQA9k30UEc7635KZutplCxAlH0WwY2fhcrW61zne1tDawW400GmnEmOHG1C6rSTPVe+RbX3as5A3gaepE+VnfyZNYo4SezpDmPFCgoavUCAi4AGZ2HEqg4eJ0klXw3UrUw4urqGDnvEHnfdGa2x6f3J3xdYI7vnxJOr/qrnqmcaonEZdDpbQyqwP6vB0KZ0IpqWHIsMxHvLlwLHBc8lcVFEXaNW50mN6R4ksy0gdB228zu+Q+s1OINzMNi6uepUfmSB5DQewE9Hiw9kxrmybsbBJWqWq1BSorl6x+QJsFXmzWNvInhrt6eEq0No0aGCVDhqq50IUHMoUh8795mBG88xuldsPCYOpgBg6tVaVeowxKu63QE3RFzbu5w0782mxcH93oUkpVkqZMtN3GrU841yDeoJCW/dG+exs7lDtfB0tqPiPutNFbDXpq4GVqrpe6kjvKbEAnUaGcsr96/rOu7JxFNKv6OwdJ6dMr95aq9w9a+XKQTvBB3+Fuc5htyjbFVFX/7aqjyFRgIBsaVeyo/NR7gGSl2pW3KxHgv/EqqWKCAAC9gBqARoLcZ7faVQ6A2HIaey2E8DxOT6OGjZZVGrNq5I/fbL/qMYKKO9VX+EFj+Q95WZ2O9j6aRRTXjr5m83Hx2VY2T2xFBeLsfML7AMfeKMWf8OgB4kX/1k+wkVHy7haK2JadVgj7NqCJL1cS4sXCjlcn/ACiwjQwo+Oox8rKPaRmxLRl6zeM2sUV6KopFktCiPhX17R95WdIaCVKQyWuhuABbsnRrex9J5AqNuBMeTZ9dtyGbSo0ZzC1mpOjobMrBlP7SkMv0E3GFxeBq00AxIoXqnF4jrSWdqlmsqBV7Si+gEpV6G4mq11GQHmD/AFl7s/7NGuDiK5I4qgyk+BOsoND0Ho1NpYxMS1/uuDLmkWGXrK7/ABW8B2vCyjiZ12VHR1aKUFo0UCLTAUINLePjffeW8AWJFiQAvCLCAEIQgBCE8OdN9oBExuMSmpvr4TlnS3aVAuRTpojb2ZOyfIgaE+Ymn6UbQsLU+0ePK3nOW4+m5Yk63NzMuKl2iNJjh23UGl8w/aEkUekFt6W8tB7SlNOJknOWCDI4o1uz9pYSo18TVYDkFP5SVi8RhhVNbCY56BKCkQKQqdkEk2LjS5tfnYTD5IoQzmvG1dxZNK6L/alelVYNiMTWxLLawdVpU9LWuii7DTu6CR6mPLakypynnPD0yRa5HiDYyywyl+zI4N9smYzFhUZuSk+ttJi6Z0A5maI4TsFWYte+ranXdKKrQZQVI1U3/wDz6ztjhoqNRjqbXY2zKJRMdinH3dKdMMnF3onJk8swGnG4mnp7aDrSrZVo/en7C2uci5lGY7tdDfcJgejm08OyNhcbnNB3FS6GxVxzHFG0uBqDrNZtBMLWq0ar4qilCihVKSPdltoLIt23Bd/Lxm2aH9jY7aFGg9TH2anTLqM1sylDYAX1sWAAHG4tMJQUFmqOAXLE38Tct7kyx6S9JWxNsNSduqRs123uw0DMOHgOep8K6iNAAPCASA89qTPdHCO25ZZ4bY9RuHyF4BXoI+iEzS4Lou7fAfXSXuD6JH4so9LwDDUsE7bgZOo7GY750bDdG6a94lvaWeH2dTTuoIBzrC9GC3wMfS0u8L0PHFFHnqZtlS26LlgGdo9GqKd7XyFo8dn000VBLlkjTUDvtAIGHwmY2A8JYUUWy5F3kg3Gug4xylTK2yjX/t5NaiLEbgb3t474BCoUMlUMu5gVP1/L3lvIdSloLcJMEAWJFiQBYRIQBYQhACVW0yW04CWsiVqd7wDK4vBBuEz2O2GDuE3NehYyK1IcoBzTE7CYcJAqbKccDOqvhVPCMNs5DwgHKmwLDhPBwjcp1Ntk0z8MabY9P8MA5h91blHFwDEaAzpX6Hp/hE9jZ9MfCIBy5sBU/DI2J2O7jVDfgRoR6zrX3Gn+ATy+ETcFEA4kOimKJ7Kj1J/ISfh+hWMfRnsOQJP1tO0YPZ2Y7gBLFcHTByWF/L+soOTbM+z4/EwHOaXBdC6KbzebB8FkNxxntKcgKfDbAoJupj1llRwiL3VA9JNSiTwkhMPFgjJSjyJJK0AI6qCSwRlpz2tOSAIoEAZFKexSEcyz0FgDYpjlBqYtHbQtFAaVOUctPVoSg8lZ6EIsAIkIQBYRIQBYQhAEjVQR6NuIBDqeOsjvTU+EssgtGXw/KAVzUZ4NMyaaZEVRzkBA6ueSktepB4Rs0huiwVhpzz1csnoTyKHhLYK/qoi0LndLJqGk9UqOogDYwwZAEOqm/K8feiLhyLkLH0pZbXOtraRzLAIgRmQ5hwv6zzTp9qTAhANzeIiawBMk9ZY5aLaZoDYSegs92hLQEtC0WLKBIRYQBIsIQAhCEAIQhACEIQAhCEAIQhACIYQgHmEIQBsoJ4KCEIB7QT0aYPrCEgGwgnvIIQhgTIIgWEIQHbcYERISg9GAEIQBYQhAFhCEASLCEAIhhCALCEIAQhCAEIQgBCEIAQhCAf/Z"
    },
    {
      "productoId":2,
      "Modelo":"A4",
      "Descripcion":"2 puertas",
      "year":"marzo 5 2022",
      "precio": 180000,
      "Marca":"AUDI",
      "Color":"Blanco",
      "imageUrl":"data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBUVFRgWFhYZGBgZHBocHRoaGBocHBgaHBwaGRwcGhwcJS4lHB4rHxoeJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjQhISE0NDQ0NDQ0NDE0NDQ0NDQ0NDQ0NDQ0NDE1NDQ0NDQ0NDQ0NDExNDQ0NDQ0NDQ0NDQ0NP/AABEIALcBEwMBIgACEQEDEQH/xAAcAAAABwEBAAAAAAAAAAAAAAAAAQIDBAUGBwj/xABNEAACAAQDAwcIBwMJCAMBAAABAgADESEEEjEFQVEGImFxgZGhBxMyUpKxwdEUQlNiotLwcoLhI1Rjg5Oy0+LxFRczQ0RzwvIWo7M0/8QAGQEBAQEBAQEAAAAAAAAAAAAAAAECAwQF/8QAIhEBAQACAgMBAQADAQAAAAAAAAECERIhMUFRAxNSYXEi/9oADAMBAAIRAxEAPwBzk+EQtLVsyJQK1V5xYVpYCpApGjRYg4bDolMqgU0oNN0T0aOjNPqIcENK0Qcft7DyLPMUN6o5zeyNO2CBtrYkrEgecBqK0INDeMXtXkKyVaQxceqTQ9hi7n8t5ekuTMfpIyjwrEM8rcS55mGA6wzcN9REslXenPJ+GKs6moZdVIuIewCApNJ1CinfF++znmO8x5RLOSW51Be9hWwtD0nYzqCFkKK0rV9RrSJxOUUMiUMgbfzf7zCG8Z/wJPQZg/FGqTZbqKCRLpuBcEDhu6d8MNh+cqeZlEitBmUgHf8AVoDDinKMblgwkbcbNYf9NL/AeHR+qmANn8cIm7TLDivKMRlgBI287ASv5mesMb9NAwtCBs/DfWw01epm39p/Rhxq8oxeSHUwxIJsALVJpGpOxsK3ovOToZK+OUV8IZnbBRkKJiEJzA84Fd2m+Jxq7jO/RvvL3wibIK2P6rF6vJDEMhKFHetpannOKVJUmgJ6NTQxExeGK0DKQQiggihBqagg6GJeidqrJAyxM83pCVl69cTbWicNgmeuWlhepiQNjv8Ad74k4clEmMNwS/WYPD7U9aLNMW6V2IwTIaNTSsM+a0i62rRsjDQp8Ygogt/CFakGNjv0DtgPshwK2oBXWLTGbSVJhQimWgr2CHJeKRwwBBJU27Iuozu7ZrzUEZcSAKDT3QKX/wBIy3pGyRMlbLdlDClDpUwSrp/CLyWaS06j74s7qXpStspxw74hFI06uKisVeDwDTCaUCg8529FB08TwAuYtnxJVYaCNbtNp+KkyBMSXhklLlV5nNLg00W7MbWoKX1i22VydIAeWmX+nmgZuuWn1B1XIPpwzKwazJpGYsqnM7kc59wGb0r0OpJpX1lpm/ljlZlfMWfpZLJ4qh/2Fh986celcOwB6qwI130CT9knsL8oOOmp8c9/7XeGTKADU9LawvEYtJaF3YKo1J47gALkngIodk8qnMh52IZaZsktVWjuwu1N1LgV0F4q3aZiX85MIFPRUegg4Ab24tDZbpMxm1ZuJJVM0uX6oNHfpdh6I+6ONyYLBbHRdEB6h8d8ScPLVdLcTvMS0xIAvb9fGK53Km/MKmoA7Lce2HCbU3cPn0w3iMeoiufGddPfFRNaYeMMNNPHxiKcSdDT9Whvz/vgiySbxMRJeERWDBdL3JIhzBSw4JJIAPjTp3xKfCqBUEnSsCFM4ppT9f6QgzjxqYbly83ohjThUw+uCJ+q1YJsazDrC1xRgxgT6rQb4Q00a3h28IJspMVAbI3pKp7BFW04A2J66Qrz3YD+hBrdSZuzkN0qji4KErcXGkL21s/6fhmnIoGKkikxALzAu+nrU07RDcjEV1MOSMacNPWevonmzF9ZDv6xrGbNumGXbnQa4t4QWUUP8I13lA2Ksmas+VQyZ/OFKUVyKkdR9IdvCMaL1jm9C0wEgOjo0xUzBSGf0bGtLQn/AGDL/ncjxiIj7uiEolerfCJZFliMJ6EuW4mkKQSmgJPTFvh+RkwojvOloXICg3r2jQ9EVWzpyZhUc0ePXxjetMDYfDkCozsKdStHSYxyyz1dRn9ocgHeYz/SZQB6Cd3XBYDkGUfMcVKNiKUO/tiznzOjwiDOausXjGf6Uy/IJ6UGJknvEMTOQuIFcrymtoHp7xD4y9PfDyOvE98TjF/rVNieSGMQA+bzDfkdWp2aw15tVCrMmCWyggqyNWtdQRYiNfh8YN5p1RW8pVwwlM7mj/VGuc8KbuuHH41P0+s4MKmdck/OSwAlojZnJ3Cto6NsHk2kpVeaoLi6oLpLPE+u/Fj2RB5CbDSVLXEuM011qo+zQ6AfeO8xpsRiAoJJ0vBLds9yv2sUTIK1bUDUjQAdLEgDrivwEjIlDTMec5G9j8BQAdCiIMknE4lnPopzu24Qdgq3asWeIQgU46wS/EKZONTeBDTS+iDisqzCYcuwZwBQUVR6KIPqqPedSTUxcKbdEOSti4oCn0Zz+/JFe96juh0bHxrf9LTrnSvhDcWzKobztf1x14RHecdf1eLROTWNP/IUdc9PgIX/APEcYdUQf1oP/jDcZ41QM5Ov6+UGxy36v174vxyLxm5ZQ65h+Cwk8iMYd0r+0P5Ibi8az+bj+j+rwSVMaNeQ+L3iV/aH8kPS+ReJX6ks/wBafyxNpxrOJiigoNP1viUmNBPOzU4DfSLh+ReKP1Jf9p8xAPI7Fb5amnCYvxi7hxqMm2UAoA1OyFrttdcrX6jC25I4r7Gv9ZL/ADQzM5M41dMLm/rpQ04XibicKkrtpN4YV6B0wzitphkZUzVIpp2HTorDa7Gxyj/+Bz1T5B1/e6IUNm4z62AnC40eS3ufohuHC/FUqnh1QQmXoa1+O6LZdm4nfhJ6/uKen6jGG5uy5383nf2Mw6dSxdmr8QQ5B6Ru/wBIlo4dSp4UPVEdtnT1P/BnD+pmflhCSpiG8twOlHHwgaX+wMuJw83Z8085QWlsdw1BH7Joeo0jn0/ClHZHWjIxDAjQg0MXZx7yp6TkUgpTUEZqag1GhFoseXuBSaJeOk3SaoD03MBYnsGU9KiOeU9vRhl6rP7G2LNxT5JKgkCpJsqDizbo0Mjya4vModpeSvOyOc1OjMgEWfk0mZJE1q0q4BPQEWg8TGkxe1AVoJrofWUKT1c9SPCGM9rll6ZXanIWXIku484GUVBYqUt6xGg6TDuDQDCSaXyOC1DWmZSCbbqmJeO24iKQ2JmvUEZSJYDAjQ5UBiHyWxCSpOWgA32OnTWO2PcefLqq/H4qWpJzr03ivfEKw5pr1R0WXhlelBLJe40qeyFvgimssdgB90TcvtbhlO7PLmqBd707DaKnFo7mY4fmS2VLNlJLCtcupjrktUayhSRqKAEdYit2zsLDODMnyVFBdxVGpwqtCYutszruuV4fFFHQ52y1owLEggg7jEfaGMabM55sN3q8B1xN2pspSzOjCVLDc1ZjEsRTUCmYxXbNwysxDGpFx09MWfnlvSX9cJjy+Oi7C5QhsOEoQ6IABQ88AUBU74gTGxMwkM7DNU5PqqvSSK1rDXJbHpKZ1mFqMAUJ9EZa5gTuNxGkTaOHUEl0zHprQbhaOn8teXOfvubmp/1SYGRMkoVQAksWJoTU2AG7QADshnEJiXJLPl6qD3CLTE7YSnNZYz+0ttlb0LCh9GljurXdHXHDGTdjhn+ueV1L5+COBfe7e03zgRnDji1/5Y1+9BxeWH+MZ4fp/lXoZIWBARYeVY8D6pIWFBYUFgwIBGWFBIXSDpECAsHlhdIOAQEhWWFQIBOWBlhUCATlgFBCoEAnLB5YOBAJyweXpg4ImABAhDyFYUIBHCghYEHWAzsvkpLliaJJyCawYqwzKpApzRXm1jCbf5OYvCh5pKTJWpy1JSu8q2gHEV7I64xiNixVSIsqWbefJmLWmbMTS+7wjechtspiJToyqGTXpB0MUXlC5MfR1M2UgEpmFQB6BJ3fcJpTgbcIouSW0vo04MVJV1ykDU3sRGpl3pnLHrbqeBxKKrIz5HR2KNSxVt1eusKXGTg5fMGWoNMw3C9umJEuYGUEy2uN6/KEtisOvpDL1qw+Ea4TduvLP9MrJLfCFtXauHJZ2dEmIARS7caFdcpjmO09uYjFuzszZK1VFOVV3ClTrvjU+UXG4cSkMsqzuStRQkJS4jnyYshQKCNfnrG91z/a5ZT/AMwiYWrv7b+MOSkckXpCfOwy0011jXKS72xwys1qLGbhmUipLdGbS14ZmluDDtMI88bXiUJxYCrKOuNcp4jnwy81X+arv74cWUy3U1+W+x1iWUrpkbqN/GGgu8btQd0JIXK+0YTTxgoDgE6QIm8mtYvTywtYjI0PKY8z3HhBw1WFCIF1g6wiFQCoEFAgFQIKBWAOBAgQAgQKwVYA4EFWCLQBsYCrCBBloBdYSWhtnhDPALZ4iYxuY3UYrcfymwso5Xnpm9RWzv7CVbwisw/K3D4hzJQvnKsRnRkDAa0zAXvpFE7aMgT8PMktdXR1vqKqQCO28ch5ZsPpAYDKmRQhUChAVQaU6Y7FJNBHFuV8gI0pVWi5CQeJzsG37iPGFIjYbbLoABNmL++1B2Vi0k4/ElqfT5YWnpNMN+witYyUGynhF5VnhFhtjFu7AO4fLW40iG6EAVFPjAwksM6KdCyg9RIr4Ro+XTJ59VQiktES33VAJ77dkTl3tZjOOmaAMEYAaCrDZoYaCrBQIbNDBiU+KLKKgZhv3kcDxiLAMWZWJcJl5OfSG4+ECGYETll9X+eHx6aR4eR45H/vNm/YSvbmfkhQ8qE77GT7cz8kRXRJuNR5rpNn+aCEBZYmebZxQHOWBDMt6DKaChrfStwOMRs5fEMVRSyp9KZcrE1VcwfOwoBzmJBLc20Y5vKfMNK4eQacXmW70hf+9CZWpw8knjnmVHbki7NNnJxSmW7tiSXDBUYzmULoCTLRwCAc1FarELc3iXhsQolCY+IczGzZAszMz3OUCUpKFiKVAFuO+MKnlQauYYaUW3kPMrTr81WFSfKWVNRhJQJ1KvMBPGv8leG006thnYohcAOVXMBoGpzgO2sOh45ePKjxw6/2rD3y4cXyppvw/dOX4qIium54GeObL5VJW/Dv2TJJ97CHk8qOGNjKmr+9IPumQHQ88DPGIl+UbBHUzB/Vl/7haLTA8qsLOIVJy5m0Rqo56lcAnsgNEXhJmRS4rbclDleYobcgOZz1ItWPdEc7WmP/AMOQ54NMpKXtDVcexAaAzYQZsY7be1MRKQsXUMbKkpMzFzWih3rXj6AoATGLmYLGTwDiMSorqJkytenIlVHVSLodPx/KrCSah56Zh9VTnf2UqfCM5jvKOgqJMh3O5nZZan+8/eojL4fYchPSmu9N0tMo7yfhEmUmGQgLJDkmxdy57VW27hDQcxPLXGzDRWSWDuRMzdWZyQfZiI+AxU+83zzgj/muVQ9IQlUPYsPTeUwlVRVCUtREVBpa4v4QzL2q8wZmshFyzDwJI74oL/ZyS1ozouoCy1qe7mjtvBcknDYwZRnKrMANcoUZGFzeuuoG+G8O6TjMQIoZwiqKZmCZqu5a5XmWF9ZgAix5J5PppSWKJLkutRvYNJBJPEh/Axd9M2dtDj9tLLzKSXcWKrVEU8Gc85t3o0jkfKLFu8+YrGqo8xEG5VDtYR3CTgJSOXCDOxJLG5qTU0J06hHFOUWEyYiYfXeY/tOxjhJnLblZ/qT09Gd/OyTCXrzbfKqkOAamJLYlT/pDAl9EJyRpz7SsBzpyUTNc82tMwAJN90WnKwf8JymUupaubMSLABm3mlD2xVbMRfOoGYopYKWH1Q3NJ8Ys+VE0UkJmqURkbpyuQjHrUA9VIvs9VRvLKkgihEJpDvnifSo26+tB0i8O/wAkfXQ9jr8CPGOlxl8VxmWUncRCIBiX9CY+gyv0Ked7LUPcIjOpBowIPAih7ozcbGplL4IgGHFC33QhuiI0KBEyUKAW8BvvAiKbE1Ps/wAbQfnE+zPtn5Q8Jsv1e+W3wmwYeX9ztSZ/iRQz52X9mf7Q/KAJ0v7P8Z+USKy/6L2JwPVUMYFZX9H/APd8VMA0uJl/ZGv/AHD8okysSpFgVH/dbUnpENkybeh3zPihgfyH3R+/M/wTATUm1Fam39ILU6Cpg0bNUjPf7+tN/oRErh/u9jzP8CAFwwBvf9uZUdX8hFRIIJP1+vMKVr+xrCcla0DcNV4VpdYYHmPWB63mfCRArIvztfvv/gQDjyFAqwIHE5N/7kQZsxR6GanSwIPZQQ+TJ0qO15nwk07+J7GnZLgaHoJ324RB1Hyf8oBOlujIqPLpVkUKHBrcgD0qi8al5++MN5O8HlkPMpTO4Ar6qCtR0Et+GLnlDtESZLvmykKQDqc7Ci233v2RUqDjc2Jd3Cl0l1RQK3NaO1vvAJXcFY6NERdnTKUYqg6WRSPHNGVXlhiVQIiykAAFkzGg45y0RZnKTFt/z3XoQ5B3JQQ2um9l7HNAXJNCbhXY95FPGJMidh5JLO6F6EDO8tctbE5c5atD4mOUT8Q7mru7HizE++GwkNmm1xDYV3Z3mq9/qEqLWF2GlOANaawtp+DQWVW/aNT2kMoPsxhinb1XhYkG1RSu8kD3xNmmoxvKZFXJKCgfdRVGlK0AUE7rg9dCRFt5MnzPPamglrUmpJcsx/8AzWMBRRqa/sj3k0+MdE8mqASpjAUzzALmvoIN/wDWRdljoaHSOJbdpNmZ13gdnT4x2R5mVC3AE9144ts7AvNCtayrv1sKxLNrLJ5VZSmsDKOPhGsXYecVNKw0/JwqTvEONN/GWC8Kkwl2JJJqTvMWmHleanbjlrSunCI20pGR6cQG6q3ie19bQYMNBkQREEHURNk49wKE519VwHHc2nZECDjUys8M3CXyfxMxWNVQJ0AmniTSGIMNBEwt32YzjNNfJ2ICoPn8OtQLGalRbfeBFls/knLmy0mHEFcwBpRbVgRltg/oz+o/st8oHmXH1G9kw0BCw5GhPeYIMo3A90JpC/Pv67e0YMYl/Xf2m+cA2IIMOMPjFP67+23zgxipn2j+23zgGMw4wAw4xJ+lzPtX9t/nA+lTPtX9t/nARqjjAqOIiQcVM+0f23+cI+kzPXf22+cA2prp4QtZTV9EittDAbEObF3I4FmI8TFzyMwPncUlRUJV2/dpT8RUdRMB1DZeFEiQkvTIor+1q1P3iYwXLzaJeYkgEc3nNUgDOwsCTay/3o3G1MWJaM7eigLN1C9O0xxvFYhpjs7mrOxY9ZNe6NVACKDdh4n3CkAMtdWPQFHhU/CEiW3qnuMH5sg6gU+8LdxrGVDOB9U9rfICCM07go7K++sGQPW7gT76QVV6T3D5wBmYx+sew08BCFFwIUH+6O2p99vCDM1tK0HAWHcKCAHmiNeb12PdrHU+RWHyYSVxbM5/ecgfhVY5VLlFiFUEkmlhvNo7fgcMEVUGiKqewAte2le2LEp3aszLhpzVpSXMPcjGObbHwjhEYWBRb31oOnWN1ysmZcFiOmW6+0MvxjObFlN5qXR6AolbV3C1zFnlL4PpLemlev8AjARnFarX96kWuQgCjafd1gjI1J/u6+Ma2lmmD2pKPnqgUtehrff4RXbWNXr0CLXaeCmicXoShNRwHR4RWYtWZjW1L7o53y6Twr6dFYQYmphidxp2RGmSiDBOzUFSFlDBUgEwIOkFSAvcHgkmIrtMoSKUOa2XmjwECKPMYEXaapfnB6i97/mg/OD1F73/ADQWZfVPtfwgxk+8O4xFATF9TuYwPOJ6h9v/ACwbKg3v3L84KicX7l+cAedPUf2x+SBnT1H9tfyQtslBUzKXpzV7frdEICy/Wf2V/NFB+cT1H9tfyQPOJ6j+2v5IMJL9dvYHzgZJfrt7A+cARdPUf21/JBB09RvbH5IUVles/Yi/mhQErcX9lPzGIGmddyd5J+UdF8nuAySWmkUM1rfsISN+lWLdeURgcLhzNdJaA5nYKCaUvvIA0GpvoDHXMNLVEWWllVQi14AUHbFiVleX20aIssG7tU/sJp3tQ/umMKsxhYMQOg0jY8uNjzROWaULSsijOASq0zGjlbqL1qbXjJFCBXIpHEZmHfWkKpkmuvjAVCdAT1Q4rvu8FX4CDKubEtfcSb98QJMk7xTrIX3wMg3sOypPhbxixwvJzFTPQkTD05Gp7VKeMW2G5CYlvTMuX0PMUHuTMfCLoZfm/ePcvzg8/BQO9vfUeEdAwfICX9ecz9CIR+JyAfZjQ7M5K4ZbpIDEEjNMYvpxQUSvWphpGL5EbHd5i4hwcks1SujOPRCjSxueFKbxHT8NIgBESmd1tYAbgNwVdB0QJm1FFkXtb5CKM35SHyYN1rQuyD8QY+CmK3ZyqqKtgcq1r1CK3yg4wzHlSa1ZmzHorzF97d0Xxw1brly/eqLVqLite+ESxITEilPhClme7iCL9cNyJCrdnA3U/V4flSkJJ0HX40ItCLe2M2vtNwzIVQhTdqkXHCn6vFFPxeY3AYdNT46xstsbFU5m1rSgCoSSN9Tc9XRGQxWHytTduqKfKGi02uPp9UdYtD+bzmrC2lRS3dEBk4Qm4vGLPjcy+nJ8oAkZq9UR3QiJaTQQePCg7KQjzLHTrpDZr4iEQIceWRrUdcEqGsVkikCLaXJlgCpvv0+UFBdLVuQ+I3PL/H+SEPyMxI+sh6jT30icnlCneqvcPkYc/wB4cz1E7f8A0i9Ip35I4n1VP76fmhB5J4n7Nf7RPzRer5Q3+zTvP5IdXyh8Zadzflh0nbONyXxVqy1t99Pg0J/+L4n7NfbH5o1KeUNd8tPZaHF8oafZJ3H4mHR2yg5L4n7Jfb/zQY5LYn7FPb/zRrB5Qk+xXvUe94WvlCl/zce1K/xIvQyQ5LYn7FPb/wA0OpySxJpVFXpzIad7/Axqx5Q5P2H4pX+JC/8AeFJ+w/FL6P6SHQhcnuTow7F3OeYeaCoOVAeBIHOIHAUFRetTfmW3AxTt5QpVcwwwqLAkyun+k6T3w3M8ox+rKQdbJ8HPugNDJacvok9Wo7jaEzdmLMOZ8LIdvW83Rj1sprGQneUScfRCAdH/AKfGK6fy4xLfX7OcP/OnhDZpv12Ei3+jYdelkzf3yYkoypYTJadEtUH9wVjk83lPiW+v4KfHLXxiHN2xPbWY/Yxp3VibNOvzcVK+s8x+xqfiIhpNqoPQkk9JYe4Rxt57NcsSYSHOtT3w2rsp25N3KqDoWp/FWGZmPd/Sdj1m3dpHNdncoZ8ogFs6b1c17m1Hu6IscRyxc+hKRelmL+Ayw2NusyK/a235UgHM1X3It2PX6o6TGCxe3cTMs0xgOCcwfhue0xXAQ2NPsDDTcbixOZeajBidFGX0EU0u1aHvMdF+iqK1pfWtDXrOsc55E4lkmsgYqHUDWi5683MN/wBa0bfDzhTMztam8gAa6XINd998anhKlphZda5KmvAD3XiRzL1oOulOP6rDL3A51RfWtQKVqfmYiuvojIr3F6UoCRc2rS+uloBc2ZKuTe31ctwOBpzurWKTaEtGFKsFNKFiBm51BzjYrU7tDrFpPVAwo5Atzamp9JcthS/wEVmMlZW4g3oxFQMy0KnQNzbk0A3m9YDNYjCJzqUoCAbkUJ413W10iBMlhd1ukdtDU1HCLjGI6tSjHiCqk0tcMNwOlLCoiPcqyuKilQaVvUaZCRSg0puiUUzqCTQEDf0e7jACCxzjuNj7j3xPmyst1OYdJBUih+obk9PgIjsuQUJBtprXhVTQgi96RFE2FYi7igIFdwBvXqv4wzJTdvvwPXv0pC2dQLd3DdanwpD+FbObEA8ND1A1/VYxdxuapNtzeAgRPXDg65e0GvbAicl4s3AgQI25hBQcCAECCgQBwIKBAHAgoEAcCBAgCgxAgQAgQIFIAQIOkGEJgEwIWEg8sAiHFWHZUq4oandQV760p/CD802tDQ6Eg03n9dsRdJ+yZhUllFEWpc15xGVmoDushNNLUrzjXomH2lLy5lsQGGZlBqOmoHaALVPXGD2JKzsiWYksQu8gqwILVFKUFEJHpVvcRu8PhBzeZZzmN6i98wqTUiw1qQq2paNxKMYoPVhQqKnMCpFNKKb+NdYjtNVrALmApfSlDWoy6cCeETXwtK1XopW5y25taAm+8XtAbDlWAuwve1ANbi1t1OqKisxGFDCgUA0a+aooVoKitSK1tl1rpAmYJQFU1VloSPOKy5t5Aavf0DSLBcLziKDQHLUEVqajfaot8dIbmSCtyCaGpGvNNhW9x0kDSCqwqjfUVmLb1qSL0vrvFxXxinxUiU5Zsjow1ZS5oRuowJ1GkaKbgw1AxrQnrNdMpINDfStCLX1ivx8rcld5y1AqRUHJ6Qa+q5uMEZidhhudspvci5telqg1pv8AhEZsOKVDNbiKW01HXSLSapFTTNXpBBqAaFDQjU6DvivxTAitbkm2tt26190QRGAAsffbshMs3HZp/CDdf1/rCUan6/XdGasWcvG0FK1pXe3GBDCnpgRjUb5VWUgUgQI2yFIKkCBBACwMsCBACkCkCBACkCkCBAHSBSBAgDywoy6WPCBAiKWsu9x/CFLJFRU9nHtg4EAQUaG54XFOIG6HVk1oNL5aU31Hjc9FoECCj82BS9bWGliCB3Wh3zNdQBSumhOum6oFOzpgQIAxI5taAL40vSn63dUJyVBIbTUCu/W53XECBAWmyQXmyl5o32BqwudCaVF966COg4CUGS10uQQzAkVzVodbUvYmCgRuM1OzCw30tSotbp4GFSDWwrQfo7+nhAgRURp6EFQDqDXmrx3G1R1jdCmwrHRiGUWvW2tOdUZSLGgB4QIEFImopIJCDdQgsNaAUy8aRV7UkKOcVy10yNUMKWJDC31um464OBAZLGy6kXLc2o3XOlKm2+unwinYGu806dOrhpBwIek9kvTQChGu88SQd26nXDTyNCCKHrtf/TvgQIzVhNaQIECIr//Z"
    },
    {
      "productoId":3,
      "Modelo":"Rio",
      "Descripcion":"2 puertas familiar",
      "year":"enero 2 2022",
      "precio": 150000,
      "Marca":"CHEVROLET",
      "Color":"Rojo",
      "imageUrl":"https://www.chevrolet.com.mx/content/dam/chevrolet/na/mx/es/index/cars/2023-aveo/colorizer/01-images/rojo-scarlet.jpg"
    }

  ]

}
